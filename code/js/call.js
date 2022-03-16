function food(jop){
    console.log("food",this, jop)
}
let louie = {name: 'louie',age:28}

// food.call(louie,'h5')
// call 的作用，改变this指向，接受参数并执行函数返回结果

// 模拟步骤
// 1、改变this指向
// 2、接收参数
// 3、执行函数
// 4、返回执行结果
Function.prototype.bCall = function(thisArg, ...arg){
    let fn = this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    //1、改变this指向
    thisArg.fn = fn
    // 3、执行函数 
    let result = thisArg.fn(...arg)
    delete thisArg.fn
    // 4、返回执行结果
    return result
}

food.bCall(null, 'h5')

