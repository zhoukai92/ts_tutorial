/*
any 的含义是：任意类型，⼀旦将变量类型限制为 any ，那就意味着放弃了对该变量的类型检查。
 */
// 明确的表示a的类型是 any —— 【显式的any】

{
    let a: any
// 以下对a的赋值，均⽆警告
    a = 100
    a = '你好'
    a = false

// 没有明确的表示b的类型是any，但TS主动推断出来b是any —— 隐式的any
    let b
//以下对b的赋值，均⽆警告
    b = 100
    b = '你好'
    b = false

    /* 注意点：any类型的变量，可以赋值给任意类型的变量 */
    let c: any
    c = 9
    let x: string
    x = c // ⽆警告

}