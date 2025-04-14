/*
何时使用抽象类？
1. 定义 ：为⼀组相关的类定义通用的⾏为（⽅法或属性）时。
2. 提供 ：在抽象类中提供某些⽅法或为其提供基础实现，这样派⽣类就可以继承这些实现。
3. 确保 ：强制派⽣类实现⼀些关键⾏为。
4. 代码和逻辑：当多个类需要共享部分代码时，抽象类可以避免代码重复。
 */
{
    /*
    我们定义⼀个抽象类 Package ，表示所有包裹的基本结构，任何包裹都有重量属性 weight
    包裹都需要计算运费。但不同类型的包裹（如：标准速度、特快专递）都有不同的运费计算⽅式，
    因此用于计算运费的calculate ⽅法是⼀个抽象⽅法，必须由具体的⼦类来实现。
     */
    abstract class Package {
        constructor(public weight: number) {
        }

        // 抽象⽅法：用来计算运费，不同类型包裹有不同的计算⽅式
        abstract calculate(): number

        // 通用⽅法：打印包裹详情
        printPackage() {
            console.log(`包裹重量为: ${this.weight}kg，运费为: ${this.calculate()}元`);
        }
    }

    // 不同包裹
    class StandardPackage extends Package {
        constructor(
            weight: number,
            public unitPrice: number // 每公⽄的固定费率
        ) {
            super(weight)
        }

        // 实现抽象⽅法：计算运费
        calculate(): number {
            return this.weight * this.unitPrice;
        }
    }

    // 创建标准包裹实例
    const s1 = new StandardPackage(10, 5)
    s1.printPackage()


    // 急速包裹
    class ExpressPackage extends Package {
        constructor(
            weight: number,
            private unitPrice: number, // 每公⽄的固定费率（快速包裹更⾼）
            private additional: number // 超出10kg以后的附加费
        ) {
            super(weight)
        }

        // 实现抽象⽅法：计算运费
        calculate(): number {
            if (this.weight > 10) {
                // 超出10kg的部分，每公⽄多收additional对应的价格
                return 10 * this.unitPrice + (this.weight - 10) * this.additional
            } else {
                return this.weight * this.unitPrice;
            }
        }
    }

// 创建特快包裹实例
    const e1 = new ExpressPackage(13, 8, 2)
    e1.printPackage()

}