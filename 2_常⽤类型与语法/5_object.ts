/*
1. object （⼩写）的含义是：所有⾮原始类型，可存储：对象、函数、数组等，
由于限制的范围⽐较宽泛，在实际开发中使用的相对较少。
 */
{
    let a: object //a的值可以是任何【⾮原始类型】，包括：对象、函数、数组等
// 以下代码，是将【⾮原始类型】赋给a，所以均符合要求
    a = {}
    a = {name: '张三'}
    a = [1, 3, 5, 7, 9]
    a = function () {
    }
    a = new String('123')

    class Person {
    }

    a = new Person()
// 以下代码，是将【原始类型】赋给a，有警告
//     a = 1 // 警告：不能将类型“number”分配给类型“object”
//     a = true // 警告：不能将类型“boolean”分配给类型“object”
//     a = '你好' // 警告：不能将类型“string”分配给类型“object”
//     a = null // 警告：不能将类型“null”分配给类型“object”
//     a = undefined // 警告：不能将类型“undefined”分配给类型“object”
}


/*
Object（⼤写）
    官⽅描述：所有可以调用 Object ⽅法的类型。
    简单记忆：除了 undefined 和 null 的任何值。
    由于限制的范围实在太⼤了！所以实际开发中使用频率极低。
 */
{
    let b: Object //b的值必须是Object的实例对象（除去undefined和null的任何值）
// 以下代码，均⽆警告，因为给a赋的值，都是Object的实例对象
    b = {}
    b = {name: '张三'}
    b = [1, 3, 5, 7, 9]
    b = function () {
    }
    b = new String('123')

    class Person {
    }

    b = new Person()
    b = 1 // 1不是Object的实例对象，但其包装对象是Object的实例
    b = true // truue不是Object的实例对象，但其包装对象是Object的实例
    b = '你好' // “你好”不是Object的实例对象，但其包装对象是Object的实例
// 以下代码均有警告
//     b = null // 警告：不能将类型“null”分配给类型“Object”
//     b = undefined // 警告：不能将类型“undefined”分配给类型“Object”
}



{
// 声明对象类型
    // 1. 实际开发中，限制⼀般对象，通常使用以下形式
    // 限制person1对象必须有name属性，age为可选属性
    let person1: { name: string, age?: number }
// 含义同上，也能用分号做分隔
    let person2: { name: string; age?: number }
// 含义同上，也能用换⾏做分隔
    let person3: {
        name: string
        age?: number
    }
// 如下赋值均可以
    person1 = {name: '李四', age: 18}
    person2 = {name: '张三'}
    person3 = {name: '王五'}
// 如下赋值不合法，因为person3的类型限制中，没有对gender属性的说明
//     person3 = {name: '王五', gender: '男'}

    // 2. 索引签名： 允许定义对象可以具有任意数量的属性，这些属性的键和类型是可变的，
    // 常用于：描述类型不确定的属性，（具有动态属性的对象）。
    {
        // 限制person对象必须有name属性，可选age属性但值必须是数字，同时可以有任意数量、任意类型的其他属性
        let person: {
            name: string
            age?: number
            [key: string]: any // 索引签名，完全可以不用key这个单词，换成其他的也可以
        }
        // 赋值合法
        person = {
            name: '张三',
            age: 18,
            gender: '男'
        }
    }
}


{
    // 声明函数类型
    let count: (a: number, b: number) => number
    count = function (x, y) {
        return x + y
    }
}
{
    // 声明数组类型
    let arr1: string[]
    let arr2: Array<string>
    arr1 = ['a', 'b', 'c']
    arr2 = ['hello', 'world']
}








