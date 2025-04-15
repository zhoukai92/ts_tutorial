{
    // 1.

// 定义一个装饰器工厂 LogInfo，它接受一个参数 n，返回一个类装饰器
    function LogInfo(n: number) {
        // 装饰器函数，target 是被装饰的类
        return function (target: Function) {
            target.prototype.introduce = function () {
                for (let i = 0; i < n; i++) {
                    console.log(`我的名字：${this.name}，我的年龄：${this.age}`)
                }
            }
        }
    }

    @LogInfo(5)
    class Person {
        constructor(
            public name: string,
            public age: number
        ) {
        }

        speak() {
            console.log('你好呀！')
        }
    }

    interface Person {
        introduce: () => void
    }

    let p1 = new Person('张三', 18)
// console.log(p1) // 打印的p1是：_classThis，转换的JS版本比较旧时，会出现，不必纠结
    p1.speak()
    p1.introduce()
}