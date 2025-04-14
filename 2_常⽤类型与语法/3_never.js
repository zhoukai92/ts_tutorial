"use strict";
/*
never 的含义是：任何值都不是，即：不能有值，例如 undefined 、 nul 、 '' 、 0 都不⾏！
 */
// 1. ⼏乎不用 never 去直接限制变量，因为没有意义，例如：
{
    /* 指定a的类型为never，那就意味着a以后不能存任何的数据了 */
    let a;
    // 以下对a的所有赋值都会有警告
    //     a = 1
    //     a = true
    //     a = undefined
    //     a = null
}
// 2. never ⼀般是 TypeScript 主动推断出来的，例如：
{
    // 指定a的类型为string
    let a;
    // 给a设置⼀个值
    a = 'hello';
    if (typeof a === 'string') {
        console.log(a.toUpperCase());
    }
    else {
        console.log(a); // TypeScript会推断出此处的a是never，因为没有任何⼀个值符合此处的逻辑
    }
}
// 3. never 也可用于限制函数的返回值
{
    // 限制throwError函数不需要有任何返回值，任何值都不⾏，像undeifned、null都不⾏
    function throwError(str) {
        throw new Error('程序异常退出:' + str);
    }
}
