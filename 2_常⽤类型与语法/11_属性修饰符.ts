/*
与Java类似
修饰符             含义              具体规则
public          公开的             可以被：类内部、⼦类、类外部访问 。
protected       受保护的            可以被：类内部、⼦类访问。
private         私有的             可以被：类内部访问。
readonly        只读属性            属性⽆法修改。
 */
{
    class Person {
        // name写了public修饰符，age没写修饰符，最终都是public修饰符
        public name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        speak() {
            // 类的【内部】可以访问public修饰的name和age
            console.log(`我叫：${this.name}，今年${this.age}岁`)
        }
    }

    const p1 = new Person('张三', 18)
// 类的【外部】可以访问public修饰的属性
    console.log(p1.name)


    class Student extends Person {
        constructor(name: string, age: number) {
            super(name, age)
        }

        study() {
            // 【⼦类中】可以访问⽗类中public修饰的：name属性、age属性
            console.log(`${this.age}岁的${this.name}正在努⼒学习`)
        }
    }


}

{
    // 属性的简写形式，修饰符不能省略
    class Person {
        constructor(
            public name: string,
            public age: number
        ) {
        }
    }
}
{
    // readonly 修饰符
    class Car {
        constructor(
            public readonly vin: string, //⻋辆识别码，为只读属性
            public readonly year: number,//出⼚年份，为只读属性
            public color: string,
            public sound: string
        ) {
        }
        // 打印⻋辆信息
        displayInfo() {
            console.log(`
            识别码：${this.vin},
             出⼚年份：${this.year},
             颜⾊：${this.color},
             ⾳响：${this.sound}
                `);
        }
    }

    const car = new Car('1HGCM82633A123456', 2018, '⿊⾊', 'Bose⾳响');
    car.displayInfo()
    // 以下代码均错误：不能修改 readonly 属性
    // car.vin = '897WYE87HA8SGDD8SDGHF';
    // car.year = 2020;
}


