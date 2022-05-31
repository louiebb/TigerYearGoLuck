# BABELJS

## 配置文件

### babel.config.js

- 维度：项目范围
- 全局配置

### .babelrc

- 维度：相对于文件
- 局部配置
- 执行策略：如果要转换的js在当前项目内，则递归向上搜索最近的一个.babelrc文件（直到遇到package.json目录），将其与全局配置合并。如果不在当下项目内则只应用全局配置，同时忽略与这个文件相关的.babelrc

### 例子

#### 案例1（单包）

```js
.
├── .babelrc
├── babel.config.js
├── package.json
└── src
    ├── index.js
    └── subdir
        ├── .babelrc
        └── utils.js

2 directories, 6 files
```

在顶层目录

运行 babel src/**/*.js --out-dir dist 。此时会读取当前目录的 babel.config.js 作为全局配置，根据规则应用的配置如

- <code>src/index.js</code> 会应用 <code>babel.config.js</code>  +  <code>.babelrc</code>
- <code>src/subdir/utils.js</code> 会应用 <code>babel.config.js</code> + <code>src/subdir/.babelrc</code>

在src目录

运行 babel **/*.js --out-dir dist。此时不会读取babel.config.js，但.babelrc还是会读取，应用如下

- <code>index.js</code> 会应用 <code>../.babelrc</code>
- <code>subdir/utils.js</code> 会应用 <code>subdir/.babelrc</code>

#### 案例2（多包）

```js
.
├── .babelrc
├── common
│   └── utils.js
├── package.json
└── packages
    └── moduleA
        ├── .babelrc
        ├── index.js // （require(../../common/utils.js)）
        ├── package.json
        └── webpack.config.js

3 directories, 6 files
```
在 packages/moduleA 目录
运行打包命令，无全局配置，应用规则如下

- <code>index.js</code> 会应用 <code>.babelrc</code>
- utils不在项目内，无法进行转换，同时忽略与common文件夹同目录的<code>.babelrc</code>
- 补救

    1. moduleA下增加babel.config.js

    2. 

### 总结

babel 会在当前执行目录搜索 babel.config.js, 若有则读取并作为全局配置，若无则全局配置为空。然后在转换一个具体的js文件时会去判断，如果这个文件在当前执行目录外面，则只应用全局配置。如果这个文件在当前执行路径内，则会去基于这个文件向上搜索最近的一个 .babelrc ，将其与全局配置合并作为转换这个文件的配置。
