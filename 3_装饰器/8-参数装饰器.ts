{
    // 1. 基本语法
    /* 
  参数说明：
    target:
      1.如果修饰的是【实例方法】的参数，target 是类的【原型对象】。
      2.如果修饰的是【静态方法】的参数，target 是【类】。
    propertyKey：参数所在的方法的名称。
    parameterIndex: 参数在函数参数列表中的索引，从 0 开始。
*/
    function Demo(target: object, methodName: string, parameterIndex: number) {
        console.log(target, methodName, parameterIndex);
    }

// 类定义
    class Person {
        constructor(public name: string) {
        }

        speak(@Demo message1: any, mesage2: any) {
            console.log(`${this.name}想对说：${message1}，${mesage2}`);
        }
    }
}



{
    // 2. 应用举例
    // 需求：定义方法装饰器`Validate`，同时搭配参数装饰器`NotNumber`，来对`speak`方法的参数类型进行限制。

    /**
     * 把参数索引添加数组arr，把arr添加在原型对象
     * @param target 原型对象
     * @param methodName 方法名
     * @param parameterIndex 参数索引
     * @constructor
     */
    function NotNumber(target: any, methodName: string, parameterIndex: number) {
        // 初始化或获取当前方法的参数索引列表
        let arrName = `__notNumber_${methodName}`;
        if (!target[arrName]) {
            target[arrName] = [];
        }
        // 将当前参数索引添加到列表中
        target[arrName].push(parameterIndex);
    }

// 方法装饰器定义
    function Validate(target: any, methodName: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args: any[]) {
            // 获取被标记为不能为空的参数索引列表
            const arr: number[] = target[`__notNumber_${methodName}`] || [];
            // 检查参数是否为 null 或 undefined
            for (const index of arr) {
                if (typeof args[index] === 'number') {
                    throw new Error(`方法 ${methodName} 中索引为 ${index} 的参数不能是数字！`)
                }
            }
            // 调用原始方法
            return method.apply(this, args);
        };

        return descriptor;
    }

// 类定义
    class Student {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        @Validate
        speak(@NotNumber message1: any, @NotNumber mesage2: any) {
            console.log(`${this.name}想对说：${message1}，${mesage2}`);
        }
    }

// 使用
    const s1 = new Student("张三");
    console.log(s1)
    s1.speak(100, 200);
}

