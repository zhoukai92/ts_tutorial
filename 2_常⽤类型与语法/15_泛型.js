"use strict";
{
    /*
    泛型允许我们在定义函数、类或接⼝时，使用类型参数来表示未指定的类型，这些参数在具体
使用时，才被指定具体的类型，泛型能让同⼀段代码适用于多种类型，同时仍然保持类型的安全性。
     */
    // 1. 泛型函数
    function logData(data) {
        console.log(data);
        return data;
    }
    logData(100);
    logData('hello');
}
{
    // 2. 泛型可以有多个
    function logData(data1, data2) {
        console.log(data1, data2);
        return Date.now() % 2 ? data1 : data2;
    }
    logData(100, 'hello');
    logData('ok', false);
}
{
    let p1;
    let p2;
    p1 = { name: '张三', age: 18, extraInfo: '⼀个好⼈' };
    p2 = { name: '李四', age: 18, extraInfo: 250 };
}
{
    // 约束规则是：传⼊的类型T必须具有 length 属性
    function logPerson(data) {
        console.log(data.length);
    }
    logPerson('hello');
    // 报错：因为number不具备leng
}
{
    // 5. 泛型类
    class Person {
        constructor(name, age, extraInfo) {
            this.name = name;
            this.age = age;
            this.extraInfo = extraInfo;
        }
        speak() {
            console.log(`我叫${this.name}今年${this.age}岁了`);
            console.log(this.extraInfo);
        }
    }
    // 测试代码1
    const p1 = new Person("tom", 30, 250);
    const p2 = new Person("tom", 30, {
        title: '研发总监',
        company: '发发发科技公司',
    });
}
