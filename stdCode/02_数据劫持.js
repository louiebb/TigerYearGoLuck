
let fnArr = []
let obj = {
    name: 'louiebb',
    age: 18
}
class Dep{
    constructor(){
        // this.
    }
}

function watchFn(fn){
    fnArr.push(fn)
}

watchFn(function(){
    console.log(obj.name + '已发生变化');
})

watchFn(function(){
    console.log(obj.name + '发生变化2函数');
})

function doWatchFn(){
    fnArr.forEach(fn=> fn())
}


// 监听obj的数据变化

obj.name = 'chaner'
// 执行函数
doWatchFn()