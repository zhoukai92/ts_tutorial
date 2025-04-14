
/*
与Java类似
 */
{
    class Person {
        // 属性声明
        name: string
        age: number

        // 构造器
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        // ⽅法
        speak() {
            console.log(`我叫：${this.name}，今年${this.age}岁`)
        }
    }

// Person实例
    const p1 = new Person('周杰伦', 38)


    class Student extends Person {
        grade: string

        // 构造器
        constructor(name: string, age: number, grade: string) {
            super(name, age)
            this.grade = grade
        }

        // 备注本例中若Student类不需要额外的属性，Student的构造器可以省略
        // 重写从⽗类继承的⽅法
        override speak() {
            console.log(`我是学⽣，我叫：${this.name}，今年${this.age}岁，在读${this.grade}年级`,)
        }

        // ⼦类⾃⼰的⽅法
        study() {
            console.log(`${this.name}正在努⼒学习中......`)
        }
    }

}
