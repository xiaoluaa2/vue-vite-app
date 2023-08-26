import { defineStore } from 'pinia'
type SchoolList = {
  school_name_text: string
  school_id: number
}
//参数1：定义一个仓库的唯一id名，Pinia会将所有的容器挂载到根容器；参数2：选项对象
const school = defineStore('school', {
  state: () => {
    //state必须是函数，是避免在服务端渲染时的交叉请求导致的状态数据污染；必须是箭头函数，为了更好的TS类型推导
    return {
      school: {
        schoolroll: null,
        school_id: '',
      },
    }
  },
  getters: {
    schoolList(): any {
      //在TS文件下，getters使用了this,则必须指定类型，否则会导致推导错误
      console.log(this.school.schoolroll)
      if (this.school.schoolroll) {
        return (this.school.schoolroll as any).map((item: any) => {
          return {
            label: item.school_name_text,
            value: item.school_id,
          }
        })
      }
    },
  },
  actions: {
    setSchoolroll(schoolroll: any) {
      this.school.schoolroll = schoolroll
    },
    setSchoolID(id: string) {
      this.school.school_id = id
    },
  },
  persist: true,
})
export default school
