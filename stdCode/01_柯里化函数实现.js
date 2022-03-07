function add1(x, y, z){
    return x + y + z
}

function add2(x, y, z){
    x = x + 28
    y = y * 2

    return x + y + z
}

function makeAdder(count){
    count = count * count
    return function(num){
        return count + num
    }
}

function bbCurrying(fn){
    let cuter = function(...args){
        let flag = args.length >= fn.length 
        if (flag) {
            return fn.apply(this, args)
        } else {
            return function(...cArgs){
                return cuter.apply(this,[...args, ...cArgs])
            }
        }
    }
    return cuter
}


var curryAdd = bbCurrying(add1)
console.log(curryAdd(10, 20, 30))
console.log(curryAdd(10,20)(30))
console.log(curryAdd(10)(20)(30))




















// function bbCurrying(fn){
//     function cuter(...args){
//         let pLen = fn.length
//         let len = args.length
//         if (len >= pLen) {
//            return fn.apply(this, args)
//         }else{
//             return function(...args2){
//                 return cuter.apply(this, [...args, ...args2])
//             }
//         }
//     }
//     return cuter
// }


// function bbCurrying(fn){
//     function curried(...args){
//         let pLen = fn.length
//         let len = args.length
//         if (len >= pLen) {
//             return fn.apply(this, args)
//         }else{
//             return function(...args2){
//                 return curried.apply(this, [...args,...args2])
//             }
//         }
//     }
//     return curried
// }