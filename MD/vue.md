# vue 相关的知识

## vue

### 组件生命周期的过程

* 渲染过程
  父beforeCreate > 父created > 父beforeMount > 子beforeCreated > 子created > 子beforeMount > 子mounted > 父mounted
* 子组件更新过程
  父beforeUpdate > 子beforeUpdate > 子updated > 父updated
* 父组件更新过程
  父beforeUpdate > 父updated
* 销毁过程
  父beforeDestroy > 子组件beforeDestroy > 子destroyed > 父destroyed

## vue每个生命周期都做什么

### beforeCreate

* 创建一个空白的Vue实例
* data和method 尚未被初始化，不可使用

### created

* Vue的实例初始化完成，完成响应式数据绑定
* data 和method都已经初始化完成，可以调用
* 模版尚未开始渲染

### beforeMount

* 编译模版、调用render生成vdom
* 还没开始渲染dom

### mounted

* 完成dom渲染
* 组件创建完成
* 由“创建阶段”进入“运行阶段”

### beforeUpdate

* data 发生变化之后
* 准备更新dom（还没更新dom）

### updated

* data发生变化，且dom更新完成
* 备注： 不能在update中修改data，可能会造成死循环

### beforeDestroy

* 组件进入销毁阶段（尚未销毁，可正常使用）
* 移除、解绑一些全局事件或者自定义事件

### destroyed

* 组件被销毁了
* 所有子组件都被销毁

## keep-alive

* 正常生命周期：beforeRouteEnter > beforeCreate/created > beforeMount/mounted > beforeUpdate/updated > beforeDestroy/destroyed
* 使用keepAlive后生命周期：
  * 首次进入缓存页面： beforeRouteEnter --> beforeCreate/created --> beforeMount/mounted --> activated --> deactivated
  * 再次进入缓存页面： beforeRouteEnter --> activated --> deactivated

## vue-router

* 本质

    根据“不同的hash值”或者“不同的路径地址”，将不同的内容渲染到router-view组件中，
    实现VueRouter的核心也就是如何监听‘hash’或‘路径’的变化，再将不同的内容展示在router-view组件中。

* 主要实现步骤

    1.Vue.use(VueRouter)会执行VueRouter中的install函数

    2.VueRouter的install中Vue.mixin注册beforeCreate函数(每个组件都执行)

    3.beforeCreate函数判断如果是根组件（$options.router存在）则给this增加_routerRoot,_router,并且采用双向数据函数defineReactive给this新增key为_route值为<code>this._router.history.current</code>

    4.当popstate或hashchange发生变化则执行updateRoute函数修改<code>this.current = route</code>

* 监听hash

  采用window.addEventListener监听<code>popstate</code>或<code>hashchange</code>的变化

  源码

  ```js
  // supportsPushState为判断当前是否浏览器 && history.pushState是否存在
    const eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(eventType,()=>{
        console.log('当前的hash/地址值发生变化了');
        // 处理相关事件
        // 最主要的updateRoute函数里面的this.current = route
    })
  ```

* 监听popstate
  
  使用window.addEventListener观察popstate的变化

  源码

  ```js
    window.addEventListener('popstate',()=>{
        console.log('当前的地址发生变化')
        // 处理相关事件
        // 最主要的updateRoute函数里面的this.current = route
    })
  ```

## vue-cli

* 自定义指令

  1.通过npm init --y初始化一个node项目

  2.创建一个JS文件, 并且在JS文件的头部通过
  <code>#! /usr/bin/env node</code>告诉系统将来这个文件需要在NodeJS环境下执行

  3.在package.json中新增bin的key, 然后这个key的取值中告诉系统需要新增什么指令, 这个指令执行哪个文件

  ```js
  "bin": {
      "gz-cli": "./bin/index.js"
    }
  ```

  4.通过npm link将本地的包连接到全局

## vuex
