/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@/utils/nporgress'
declare module '*.ts'
/* 
  declare module 是为了告诉 tsc 这是一个“模块”，从而不让 IDE 里因为 tsc 类型检查相关的 lint 而标红。
  里面的 export 是为了后面的类型推断。

  如果你仅仅写： declare module '*.vue';
  那么你只能：import 'MyComponent.vue';
  而不能：import MyComponent from 'MyComponent.vue';
  也不能：app.component('my-component', MyComponent);

  因为这个 MyComponent 是啥，tsc 是不知道的。
  当然，其实你可以针对每一个 SFC 单独写它的声明、而不是像现在这样用通配符,
  这样一来反而能得到更好的类型支持。但这不是麻烦么，大部分情况下只用通配符起到了一个兜底的作用就足够了
  毕竟所有的 SFC 的默认导出都是继承自 Vue 的。

  tsc 只能识别 .js、.ts、.mjs、.json 等几种后缀的文件类型，并不“认识” .vue 文件。
  所以后来为了更好地支持 TypeScript 类型推断，Vue3 中专门搞了一个 vue-tsc，用来取代默认的 tsc，
  就不需要你手动写一堆 declare module 了。
*/
