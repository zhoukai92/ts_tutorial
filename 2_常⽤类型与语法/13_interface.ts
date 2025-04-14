/*
interface 是⼀种定义结构的⽅式，主要作用是为：类、对象、函数等规定⼀种契约，这样
可以确保代码的⼀致性和类型安全，但要注意 interface 只能定义格式，不能包含任何实现 ！
 */
{
    // 1. 定义类结构
    // PersonInterface接口，用与限制Person类的格式
    interface PersonInterface {
        name: string
        age: number

        speak(n: number): void
    }

// 定义⼀个类 Person，实现 PersonInterface 接口
    class Person implements PersonInterface {
        constructor(
            public name: string,
            public age: number
        ) {
        }

        // 实现接口中的 speak ⽅法
        speak(n: number): void {
            for (let i = 0; i < n; i++) {
                // 打印出包含名字和年龄的问候语句
                console.log(`你好，我叫${this.name}，我的年龄是${this.age}`);
            }
        }
    }

// 创建⼀个 Person 类的实例 p1，传⼊名字 'tom' 和年龄 18
    const p1 = new Person('tom', 18);
    p1.speak(3)
}


{
    // 2. 定义对象结构
    interface UserInterface {
        name: string
        readonly gender: string // 只读属性
        age?: number // 可选属性
        run: (n: number) => void
    }

    const user: UserInterface = {
        name: "张三",
        gender: '男',
        age: 18,
        run(n) {
            console.log(`奔跑了${n}⽶`)
        }
    };

}

{
    // 3. 定义函数结构
    interface CountInterface {
        (a: number, b: number): number;
    }

    const count: CountInterface = (x, y) => {
        return x + y
    }
}

{
    // 4. 接口之间的继承
    interface PersonInterface {
        name: string // 姓名
        age: number // 年龄
    }

    interface StudentInterface extends PersonInterface {
        grade: string // 年级
    }

    const stu: StudentInterface = {
        name: "张三",
        age: 25,
        grade: '⾼三',
    }
}

{
    // 5. 接口合并（可重复定义）
    // PersonInterface接口
    interface PersonInterface {
        // 属性声明
        name: string
        age: number
    }

// 给PersonInterface接口添加新属性
    interface PersonInterface {
        // ⽅法声明
        speak(): void
    }

// Person类实现PersonInterface
    class Person implements PersonInterface {
        name: string
        age: number

        // 构造器
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        // ⽅法
        speak() {
            console.log('你好！我是⽼师:', this.name)
        }
    }
}
/*
总结：何时使用接口？
    1. 定义对象的格式： 描述数据模型、API 响应格式、配置对象........等等，是开发中用的最多的场景。
    2. 类的契约：规定⼀个类需要实现哪些属性和⽅法。
    3. 扩展已有接口：⼀般用于扩展第三⽅库的类型， 这种特性在⼤型项⽬中可能会用到。
 */