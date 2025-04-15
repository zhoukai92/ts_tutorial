{
    // 1. 基本语法
    /*
  参数说明：
    target: 对于静态属性来说值是类，对于实例属性来说值是类的原型对象。
    propertyKey: 属性名。
*/
    function Demo(target: object, propertyKey: string) {
        console.log(target, propertyKey)
    }

    class Person {
        @Demo name: string
        @Demo age: number
        @Demo static school: string

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    const p1 = new Person('张三', 18)
    console.log('--------------------------------------------------')
}

{
    // 2. 关于属性遮蔽
    class Person {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    let value = 99
// 使用defineProperty给Person原型添加age属性，并配置对应的get与set
    Object.defineProperty(Person.prototype, 'age', {
        get() {
            return value
        },
        set(val) {
            value = val
        }
    })

    const p1 = new Person('张三', 18)
    console.log(p1.age) //18
    console.log(Person.prototype.age)//18
    console.log('--------------------------------------------------')
}

{
    // 3. 应用举例
    // 声明一个装饰器函数 State，用于捕获数据的修改
    function State(target: object, propertyKey: string) {
        // 存储属性的内部值
        let key = `__${propertyKey}`;

        // 使用 Object.defineProperty 替换类的原始属性
        // 重新定义属性，使其使用自定义的 getter 和 setter
        Object.defineProperty(target, propertyKey, {
            get() {
                return this[key]
            },
            set(newVal: string) {
                console.log(`${propertyKey}的最新值为：${newVal}`);
                this[key] = newVal
            },
            enumerable: true,
            configurable: true,
        });
    }

    class Person {
        name: string;
        //使用State装饰器
        @State age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    const p1 = new Person('张三', 18);
    const p2 = new Person('李四', 30);

    p1.age = 80
    p2.age = 90

    console.log('------------------')
    console.log(p1.age) //80
    console.log(p2.age) //90
}


