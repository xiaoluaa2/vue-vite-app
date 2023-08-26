import { defineStore } from 'pinia'

//参数1：定义一个仓库的唯一id名，Pinia会将所有的容器挂载到根容器；参数2：选项对象
const school = defineStore('video', {
  state: () => {
    //state必须是函数，是避免在服务端渲染时的交叉请求导致的状态数据污染；必须是箭头函数，为了更好的TS类型推导
    return {
      classMsg: {},
      videoMsg: {},
      time: -1,
    }
  },
  getters: {

  },
  actions: {
    setVideo(video: any) {
      this.videoMsg = video
    },
    setClass(video: any) {
      this.classMsg = video
    },
    setTime(time: any) {
      this.time = time
    },
  },
  persist: true,
})
export default school
