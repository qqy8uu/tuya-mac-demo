import request from '../request'
// request 做了自动向params中添加uid的操作，因此可以不带入uid

// 查询具体的设备当前可支持的统计类型
export const getStatiType = (device_id) => {
  return request({
    name: 'ty-service',
    data: {
      action: 'statistics.allType',
      params: {
        "device_id":device_id
      }
    }
  })
}