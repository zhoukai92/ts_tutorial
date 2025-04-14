/*
type 可以为任意类型创建别名，让代码更简洁、可读性更强，同时能更⽅便地进⾏类型复用和扩展。
 */
{
    // 1. 类型别名使用 type 关键字定义， type 后跟类型名称，例如下⾯代码中 num 是类型别名。
    type num = number;
    let price: num
    price = 11
}
{
    // 2. 联合类型: 是⼀种⾼级类型，它表示⼀个值可以是⼏种不同类型之⼀。
    type Status = number | string
    type Gender = '男' | '⼥'

    function printStatus(status: Status) {
        console.log(status);
    }

    function logGender(str: Gender) {
        console.log(str)
    }

    printStatus(404);
    printStatus('200');
    printStatus('501');
    logGender('男')
    logGender('⼥')
}

{
    // 3. 交叉类型:（Intersection Types）允许将多个类型合并为⼀个类型。
    // 合并后的类型将拥有所有被合并类型的成员。交叉类型通常用于对象类型。
//⾯积
    type Area = {
        height: number; //⾼
        width: number; //宽
    };
//地址
    type Address = {
        num: number; //楼号
        cell: number; //单元号
        room: string; //房间号
    };
// 定义类型House，且House是Area和Address组成的交叉类型
    type House = Area & Address;
    const house: House = {
        height: 180,
        width: 75,
        num: 6,
        cell: 3,
        room: '702'
    };
    console.log(house);
}