"use strict";
/*
interface 与 type 的区别
    相同点：
        interface 和 type 都可以用于定义对象结构，在定义对象结构时两者可以互换。
    不同点：
        interface ：更专注于定义对象和类的结构，⽀持继承、合并。
        type ：可以定义类型别名、联合类型、交叉类型，但不⽀持继承和⾃动合并
*/
{
    // 使用PersonInterface
    let person2 = {
        name: '张三',
        age: 18,
        speak() {
            console.log(`我叫：${this.name}，年龄：${this.age}`);
        }
    };
    // 使用PersonType
    let person = {
        name: '张三',
        age: 18,
        speak() {
            console.log(`我叫：${this.name}，年龄：${this.age}`);
        }
    };
}
{
    const student = {
        name: '李四',
        age: 18,
        grade: '⾼⼆',
        speak() {
            console.log(this.name, this.age, this.grade);
        }
    };
    const student2 = {
        name: '李四',
        age: 18,
        grade: '⾼⼆',
        speak() {
            console.log(this.name, this.age, this.grade);
        }
    };
}
{
    // Duck 类实现了 FlyInterface 和 SwimInterface 两个接⼝
    class Duck {
        fly() {
            console.log('鸭⼦可以⻜');
        }
        swim() {
            console.log('鸭⼦可以游泳');
        }
    }
    // 创建⼀个 Duck 实例
    const duck = new Duck();
    duck.fly(); // 输出: 鸭⼦可以⻜
    duck.swim(); // 输出: 鸭⼦可以游泳
}
