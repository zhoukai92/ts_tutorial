/*
interface 与 type 的区别
    相同点：
        interface 和 type 都可以用于定义对象结构，在定义对象结构时两者可以互换。
    不同点：
        interface ：更专注于定义对象和类的结构，⽀持继承、合并。
        type ：可以定义类型别名、联合类型、交叉类型，但不⽀持继承和⾃动合并
*/

{
    // 使用 interface 定义 Person 对象
    interface PersonInterface {
        name: string;
        age: number;

        speak(): void;
    }

// 使用 type 定义 Person 对象
    type PersonType = {
        name: string;
        age: number;
        speak(): void;
    };
// 使用PersonInterface
    let person2: PersonInterface = {
        name: '张三',
        age: 18,
        speak() {
            console.log(`我叫：${this.name}，年龄：${this.age}`)
        }
    }
// 使用PersonType
    let person: PersonType = {
        name: '张三',
        age: 18,
        speak() {
            console.log(`我叫：${this.name}，年龄：${this.age}`)
        }
    }
}

{
    // interface 可以继承、合并
    interface PersonInterface {
        name: string // 姓名
        age: number // 年龄
    }

    interface PersonInterface {
        speak: () => void
    }

    interface StudentInterface extends PersonInterface {
        grade: string // 年级
    }

    const student: StudentInterface = {
        name: '李四',
        age: 18,
        grade: '⾼⼆',
        speak() {
            console.log(this.name, this.age, this.grade)
        }
    }

    // type 的交叉类型
// 使用 type 定义 Person 类型，并通过交叉类型实现属性的合并
    type PersonType = {
        name: string; // 姓名
        age: number; // 年龄
    } & {
        speak: () => void;
    };
// 使用 type 定义 Student 类型，并通过交叉类型继承 PersonType
    type StudentType = PersonType & {
        grade: string; // 年级
    };
    const student2: StudentType = {
        name: '李四',
        age: 18,
        grade: '⾼⼆',
        speak() {
            console.log(this.name, this.age, this.grade);
        }
    };

}


{
    // interface 与 抽象类的区别
    /*
    相同点：
        都能定义⼀个类的格式（定义类应遵循的契约）
    不相点：
         接⼝：只能描述结构，不能有任何实现代码，⼀个类可以实现多个接⼝。
         抽象类：既可以包含抽象⽅法，也可以包含具体⽅法， ⼀个类只能继承⼀个抽象类。
     */

    // FlyInterface 接⼝
    interface FlyInterface {
        fly(): void;
    }

// 定义 SwimInterface 接⼝
    interface SwimInterface {
        swim(): void;
    }

// Duck 类实现了 FlyInterface 和 SwimInterface 两个接⼝
    class Duck implements FlyInterface, SwimInterface {
        fly(): void {
            console.log('鸭⼦可以⻜');
        }

        swim(): void {
            console.log('鸭⼦可以游泳');
        }
    }

// 创建⼀个 Duck 实例
    const duck = new Duck();
    duck.fly(); // 输出: 鸭⼦可以⻜
    duck.swim(); // 输出: 鸭⼦可以游泳
}