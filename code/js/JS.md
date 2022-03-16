# JS学习

## 1、类数组转数组

- 1.for循环

- 2.借用数组的slice函数

    ```js
        let args = arguments
        let arr1 = Array.prototype.slice.call(args)
        let arr2 = [].slice.call(args)
    ```

- 3.Array.form(arguments)

- 4.[ ...arguments ]