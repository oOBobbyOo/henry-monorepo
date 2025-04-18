// 返回成功数据
export function requestSuccess<T>(data: T, message = '请求成功') {
  return {
    code: 200,
    data,
    message,
    success: true,
  }
}

// 返回失败数据
export function requestFailed<T>(data: T, message = '请求失败') {
  return {
    code: 500,
    data,
    message,
    success: false,
  }
}
