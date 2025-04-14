"use strict";
/*
 JavaScript 中的数据类型
     1. string
     2. number
     3. boolean
     4. null
     5. undefined
     6. bigint
     7. symbol
     8. object 备注：其中 object 包含： Array 、 Function 、 Date 、 Error 等......
 TypeScript 中的数据类型
    1. 上述所有 JavaScript 类型
    2. 六个新类型： 1. any 2. unknown 3. never 4. void 5. tuple 6. enum
    3. 两个用于⾃定义类型的⽅式： ① type ② interface

 注意点！
     在 JavaScript 中的这些内置构造函数： Number 、 String 、 Boolean ，用于创建对应的包装对象，
     在⽇常开发时很少使用，在 TypeScript 中也是同理，
     所以 在 TypeScript 中进⾏类型声明时，通常都是用⼩写的 number 、 string 、 boolean
 */
// 使用“:”来对变量或函数形参，进⾏类型声明：
{
    let a; //变量a只能存储字符串
    let b; //变量b只能存储数值
    let c; //变量c只能存储布尔值
    a = 'hello';
    // a = 100 //警告：不能将类型“number”分配给类型“string”
    b = 666;
    // b = '你好'//警告：不能将类型“string”分配给类型“number”
    c = true;
    // c = 666 //警告：不能将类型“number”分配给类型“boolean”
    // 参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
    function demo(x, y) {
        return x + y;
    }
    demo(100, 200);
    // demo(100, '200') //警告：类型“string”的参数不能赋给类型“number”的参数
    // demo(100, 200, 300) //警告：应有 2 个参数，但获得 3 个
    // demo(100) //警告：应有 2 个参数，但获得 1 个
}
//在 : 后也可以写字⾯量类型，不过实际开发中用的不多。
{
    let a; //a的值只能为字符串“你好”
    let b; //b的值只能为数字100
    // a = '欢迎'//警告：不能将类型“"欢迎"”分配给类型“"你好
    b = 100;
}
// TS 会根据我们的代码，进⾏类型推导，例如下⾯代码中的变量 d ，只能存储数字
{
    let d = -99; //TypeScript会推断出变量d的类型是数字
    // d = false //警告：不能将类型“boolean”分配给类型“number”
}
{
    /*
    在 JavaScript 中的这些内置构造函数： Number、String、 Boolean，用于创建对应的包装对象，⽇常开发时很少使用
    在 TypeScript 中也是同理，所以在 TypeScript中进⾏类型声明时，通常都是用⼩写的 number、string、boolean
     */
    let str1;
    str1 = 'hello';
    // str1 = new String('hello') //报错
    let str2;
    str2 = 'hello';
    str2 = new String('hello');
    console.log(typeof str1);
    console.log(typeof str2);
    /*
    1. 原始类型 VS 包装对象
原始类型：如 number 、 string 、 boolean ，在 JavaScript 中是简单数据类型，它们在内存中占用空间少，处理速度快。
包装对象：如 Number 对象、 String 对象、 Boolean 对象，是复杂类型，在内存中占用更多空间，在⽇常开发时很少由开发⼈员⾃⼰创建包装对象。
2. ⾃动装箱：JavaScript 在必要时会⾃动将原始类型包装成对象，以便调用⽅法或访问属性
     */
    // 原始类型字符串
    let str = 'hello';
    // 当访问str.length时，JavaScript引擎做了以下⼯作：
    let size = (function () {
        // 1. ⾃动装箱：创建⼀个临时的String对象包装原始字符串
        let tempStringObject = new String(str);
        // 2. 访问String对象的length属性
        let lengthValue = tempStringObject.length;
        // 3. 销毁临时对象，返回⻓度值
        // （JavaScript引擎⾃动处理对象销毁，开发者⽆感知）
        return lengthValue;
    })();
    console.log(size); // 输出: 5
}
