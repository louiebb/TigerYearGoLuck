function food(jop){
    console.log("food",this, jop)
}
let louie = {name: 'louie',age:28}

// food.apply(louie, ['h5'])

// 模拟步骤
// 1、改变this指向
// 2、接收参数
// 3、执行函数
// 4、返回执行结果

Function.prototype.bApply = function (thisArg, arg = []){
    let fn = this
    thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window
    thisArg.fn = fn
    let result =  thisArg.fn(...arg)
    delete thisArg.fn
    return result
}
food.bApply(0, ['h5'])

//测试github 远程提交