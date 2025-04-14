"use strict";
/*
枚举（ enum ）可以定义⼀组命名常量，它能增强代码的可读性，也让代码更好维护。
 */
{
    // 1. 数字枚举⼀种最常⻅的枚举类型，其成员的值会⾃动递增，且数字枚举还具备反向映射的
    // 特点，在下⾯代码的打印中，不难发现：可以通过值来获取对应的枚举成员名称 。
    // 定义⼀个描述【上下左右】⽅向的枚举Direction
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    console.log(Direction); // 打印Direction会看到如下内容
    /*
     {
     0:'Up',
     1:'Down',
     2:'Left',
     3:'Right',
     Up:0,
     Down:1,
     Left:2,
     Right:3
     }
    */
    // 反向映射
    console.log(Direction.Up);
    console.log(Direction[0]);
    // 此⾏代码报错，枚举中的属性是只读的
    // Direction.Up = 'shang'
    function walk(n) {
        switch (n) {
            case Direction.Up:
                console.log("向【上】⾛");
                break;
            case Direction.Down:
                console.log("向【下】⾛");
                break;
            case Direction.Left:
                console.log("向【左】⾛");
                break;
            case Direction.Right:
                console.log("向【右】⾛");
                break;
            default:
                console.log("未知⽅向");
        }
    }
    walk(Direction.Up);
}
{
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 6] = "Up";
        Direction[Direction["Down"] = 7] = "Down";
        Direction[Direction["Left"] = 1] = "Left";
        Direction[Direction["Right"] = 2] = "Right";
    })(Direction || (Direction = {}));
    console.log(Direction.Up); // 输出: 6
    console.log(Direction.Down); // 输出: 7
}
{
    // 2. 枚举成员的值是字符串
    let Direction;
    (function (Direction) {
        Direction["Up"] = "up";
        Direction["Down"] = "down";
        Direction["Left"] = "left";
        Direction["Right"] = "right";
    })(Direction || (Direction = {}));
    let dir = Direction.Up;
}
