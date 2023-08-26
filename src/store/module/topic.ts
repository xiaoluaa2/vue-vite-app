import { defineStore } from 'pinia'

//参数1：定义一个仓库的唯一id名，Pinia会将所有的容器挂载到根容器；参数2：选项对象
const school = defineStore('topic', {
  state: () => {
    //state必须是函数，是避免在服务端渲染时的交叉请求导致的状态数据污染；必须是箭头函数，为了更好的TS类型推导
    return {
      topicList: [],
      topicTitle: '',
      topicTime: -1,
    }
  },
  getters: {},
  actions: {
    setTopicList(list: any) {
      this.topicList = list
    },
    setTopicTitle(topicTitle: string) {
      this.topicTitle = topicTitle
    },
    setTopicTime(topicTime: number) {
      this.topicTime = topicTime
    },
  },
  persist: true,
})
export default school
