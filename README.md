# ⼀、TypeScript 简介

1. TypeScript 由微软开发，是基于JavaScript 的⼀个扩展语⾔。
2. TypeScript 包含了JavaScript的所有内容，是 JavaScript的超集。
3. TypeScript 增加了：静态类型检查、接⼝、 泛型等很多现代开发特性，更适合⼤型项⽬ 的开发。
4. TypeScript 需要编译为JavaScript ，然后交给浏览器或其他JavaScript 运⾏环境执⾏。

##  二、编译 TypeScript  

1. 命令⾏编译

 第⼀步：创建⼀个 demo.ts ⽂件，  

 第⼆步：全局安装 TypeScript。 `npm i typescript -g  `

 第三步：使⽤命令编译 .ts ⽂件 。 `tsc demo.ts  `

2. ⾃动化编译  

 第⼀步：创建 TypeScript 编译控制⽂件  `tsc --init`

⼯程中会⽣成⼀个 tsconfig.json 配置⽂件，其中包含着很多编译时的配置。 

 观察发现，默认编译的 JS 版本是 ES7 ，我们可以⼿动调整为其他版本。  

 第⼆步：监视⽬录中的 .ts ⽂件变化 。`tsc --watch 或 tsc -w`

 第三步：⼩优化，当编译出错时不⽣成 .js ⽂件  `tsc --noEmitOnError --watch`

 备注：当然也可以修改 tsconfig.json 中的 noEmitOnError 配置  

