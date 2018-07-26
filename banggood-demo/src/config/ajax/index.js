import abiApi from './abiApi'
import ErrorHandler from './errorHandler'
import store from '@/store'
import getTimeStampId from './getTimeStampId'
import { Message } from 'element-ui'
import Axios from 'axios'

const apiMap = {
  ...abiApi
}

export default function CallApi (apiName, params, openLoading) {
  return new Promise((resolve, reject) => {
    if (openLoading) {
      store.commit('SET_API_LOADING', true)
    }
    apiMap[apiName](params).then(res => {
      store.commit('SET_API_LOADING', false)
      const resData = res.data
      if (resData.status === 200) {
        resolve(res)
      } else {
        ErrorHandler(resData)
        reject(resData)
      }
    }).catch(err => {
      store.commit('SET_API_LOADING', false)
      console.error(err.message)
      Message({ type: 'error', message: err.message })
    })
  })
}

const axiosRequest = Axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})
// post demo
apiMap['DEMO_POST'] = function ({ data }) {
  return axiosRequest.post('/post',
    JSON.stringify({
      id: getTimeStampId(),
      data: data
    })
  )
}

// get demo
apiMap['DEMO_GET'] = function () {
  return axiosRequest.get(`/get?id=${getTimeStampId()}`)
}
