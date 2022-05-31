# vue 相关的知识

## vue

## vue-router

- 本质

    根据“不同的hash值”或者“不同的路径地址”，将不同的内容渲染到router-view组件中，
    实现VueRouter的核心也就是如何监听‘hash’或‘路径’的变化，再将不同的内容展示在router-view组件中。

- 主要实现步骤

    1.Vue.use(VueRouter)会执行VueRouter中的install函数

    2.VueRouter的install中Vue.mixin注册beforeCreate函数(每个组件都执行)

    3.beforeCreate函数判断如果是根组件（$options.router存在）则给this增加_routerRoot,_router,并且采用双向数据函数defineReactive给this新增key为_route值为<code>this._router.history.current</code>

    4.当popstate或hashchange发生变化则执行updateRoute函数修改<code>this.current = route</code>

- 监听hash

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

- 监听popstate
  
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

- 自定义指令

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
