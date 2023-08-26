import request from './request.js'
interface loginInterface {
  account: string
  password: string
}


const explore = {
  //账密登录
  login_password(loginMsg: loginInterface) {
    return request({
      url: `/user/login`,
      method: 'post',
      data: {
        account: loginMsg.account,
        password: loginMsg.password,
      },
    })
  },
 
}
export default explore
