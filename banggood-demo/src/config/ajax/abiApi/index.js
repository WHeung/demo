import Axios from 'axios'
import getTimeStampId from '../getTimeStampId'

const apiMap = {}
const axiosRequest = Axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiMap
