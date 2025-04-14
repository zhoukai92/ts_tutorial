/*
void 的含义是空，即：函数不返回任何值，调用者也不应依赖其返回值进⾏任何操作！
 */
{
// 1. void 通常用于函数返回值声明
    function logMessage(msg: string): void {
        console.log(msg)
    }

    logMessage('你好')
    /*
    注意：编码者没有编写 return 指定函数返回值，所以 logMessage 函数是没有显式
    返回值的，但会有⼀个隐式返回值 ，是 undefined ，虽然函数返回类型为 void ，但
    也是可以接受 undefined 的，简单记： undefined 是 void 可以接受的⼀种“空”。
     */
}
{
// 2. 以下写法均符合规范
// ⽆警告
    function aa(msg: string): void {
        console.log(msg)
    }

// ⽆警告
    function bb(msg: string): void {
        console.log(msg)
        return;
    }

// ⽆警告
    function cc(msg: string): void {
        console.log(msg)
        return undefined
    }
}
{
// 3. 返回值类型为 void 的函数，调用者不应依赖其返回值进⾏任何操作！
    function logMessage(msg: string): void {
        console.log(msg)
    }

    let result = logMessage('你好')
    // if (result) { // 此⾏报错：⽆法测试 "void" 类型的表达式的真实性
    //     console.log('logMessage有返回值')
    // }
}

{
    function logMessage(msg:string):undefined{
        console.log(msg)
    }
    let result = logMessage('你好')
    if(result){ // 此⾏⽆警告
        console.log('logMessage有返回值')
    }
}
/*
 如果⼀个函数返回类型为 void ，那么：
 1. 从语法上讲：函数是可以返回 undefined 的，⾄于显式返回，还是隐式返回，这⽆所谓！
 2. 从语义上讲：函数调用者不应关⼼函数返回的值，也不应依赖返回值进⾏任何操作！即使我们知道它返回了 undefined 。
 */
