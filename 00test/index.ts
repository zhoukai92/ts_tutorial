

{
    // 2. 应用举例
    // 需求：定义方法装饰器`Validate`，同时搭配参数装饰器`NotNumber`，来对`speak`方法的参数类型进行限制。
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