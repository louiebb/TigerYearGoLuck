function food(jop, react){
    console.log("food",this, jop, react)
}
let louie = {name: 'louie',age:28}

// let lb = food.bind(louie, 'h5')

// lb('react')

Function.prototype.bBind = function (thisArg, ...args){
    let fn = this
    thisArg = (thisArg !== null  && thisArg !== undefined) ? Object(thisArg) : window
    function outFn(...arg){
        thisArg.fn = fn
        let params = [...args, ...arg]
        let result = thisArg.fn(...params)
        delete thisArg.fn
        return result
    }

    return outFn
}

let lb =  food.bBind(louie, 'h5')
lb('react')
