import { Message } from 'element-ui'

// return false 则触发catch回调；return true不触发
export default function errorHandler (resData) {
  if (resData.desc) {
    Message({ type: 'error', message: resData.desc })
  }
}
