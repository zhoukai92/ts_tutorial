{
    // 1.基本语法
    /*
  Demo函数会在Person类定义时执行
  参数说明：
    target参数是被装饰的类，即：Person
*/
    function Demo(target: Function) {
        console.log(target)
    }

// 使用装饰器
    @Demo
    class Person {
    }
}

{
    // 2. 应用举例
    // 使用装饰器重写toString方法 + 封闭其原型对象
    function CustomString(target: Function) {
        // 向被装饰类的原型上添加自定义的 toString 方法
        target.prototype.toString = function () {
            return JSON.stringify(this)
        }
        // 封闭其原型对象，禁止随意操作其原型对象
        Object.seal(target.prototype)
    }

// 使用 CustomString 装饰器
    @CustomString
    class Person {
        constructor(public name: string, public age: number) {
        }

        speak() {
            console.log('你好呀！')
        }
    }

    /* 测试代码如下 */
    let p1 = new Person('张三', 18)
// 输出：{"name":"张三","age":18}
    console.log(p1.toString())

// 禁止随意操作其原型对象
    interface Person {
        a: any
    }

    // Person.prototype.a = 100 // 此行会报错：Cannot add property a, object is not extensible
    // console.log(p1.a)
}


{
    /*
    3. 关于返回值
        若类装饰器返回一个新的类，那这个新类将替换掉被装饰的类。
        若类装饰器无返回值或返回`undefined`，那被装饰的类不会被替换。
     */
    function demo(target: Function) {
        // 装饰器有返回值时，该返回值会替换掉被装饰的类
        return class {
            test() {
                console.log(2)
                console.log(3)
            }
        }
    }

    @demo
    class Person {
        test() {
            console.log(1)
        }
    }

    console.log(Person)
}

{
    // 4. 关于构造类型
    {
        /*
          new     表示：该类型是可以用new操作符调用。
          ...args 表示：构造器可以接受【任意数量】的参数。
          any[]   表示：构造器可以接受【任意类型】的参数。
          {}      表示：返回类型是对象(非null、非undefined的对象)。
        */

// 定义Constructor类型，其含义是构造类型
        type Constructor = new (...args: any[]) => {};

        function test(fn: Constructor) {
            console.log(fn.name)
        }

        class Person {
        }

        test(Person)
        let f0 = () => {
        }
        // test(f0) // 箭头函数不能new，所以不是 Constructor 类型
    }


    {
        /*
        在 TypeScript 中，`Function` 类型所表示的范围十分广泛，包括：普通函数、箭头函数、方法等等。
        但并非`Function` 类型的函数都可以被 `new` 关键字实例化，例如箭头函数是不能被实例化的，
        那么 TypeScript 中概如何声明一个构造类型呢？有以下两种方式：
         */
        // 定义一个构造类型，且包含一个静态属性 wife
        type Constructor = {
            new(...args: any[]): {}; // 构造签名
            wife: string; // wife属性
        };

        function test(fn: Constructor) {
        }

        class Person {
            static wife = 'asd'
        }

        test(Person)
    }
}


{
    // 5. 替换被装饰的类
    // 需求：设计一个`LogTime`装饰器，可以给实例添加一个属性，用于记录实例对象的创建时间，再添加一个方法用于读取创建时间。

// 自定义类型Class
    type Constructor = new (...args: any[]) => {}

// 创建一个装饰器，为类添加日志功能和创建时间
    function LogTime<T extends Constructor>(target: T) {
        return class extends target {
            createdTime: Date;

            constructor(...args: any[]) {
                super(...args);
                this.createdTime = new Date(); // 记录对象创建时间
            }

            getTime() {
                return `该对象创建时间为：${this.createdTime}`;
            }
        };
    }

    @LogTime
    class User {
        constructor(
            public name: string,
            public age: number
        ) {
        }

        speak() {
            console.log(`${this.name}说：你好啊！`)
        }
    }

    // User接口
    interface User {
        getTime(): Date
    }

    const user1 = new User('张三', 13);
    user1.speak()
    console.log(user1.getTime())
}