# Ant-Design-Pro-Plus

基于ant-design-pro v4 typescript 版本新增代码生成器模块,可以快速生成 curd 代码、接口interface, 减少90%的开发时间,
最好先了解antdesign procomponents 组件中的[ProTable](https://procomponents.ant.design/components/table)和[ProForm](https://procomponents.ant.design/components/form)
## 一.项目运行

### 下载依赖

```bash
$ npm install  
  或则
$ yarn
```

### 启动项目

```bash
$ npm start
```

### 打包

```bash
$ npm run build
```

## 二.代码生成器

### 进入到generator模块,下载相关依赖
```
$ npm install  
  或则
$ yarn
```
### 目录介绍
```
1.generator/template  模板目录
2.generator/index.js  代码生成器
3.generator/config.js 生成器配置项
```

### 如何使用
```
进入到generator/config.js，可以看到三个配置项,分别是
1.moduleName
  模块名，配置了模块名，代码里会自动替换
2.data
  这个是最重要的配置项，通过这个可以生成
  data.d.ts
  columnsData，配置列表里的数据
  搜索栏和curd的表单显示、类型
3.serverURL
  curd接口地址,会自动修改service.ts里的接口地址
4.配置完config.js之后用node运行enerator/index.js
```

```
node index.js
```
5.把包移到项目目录下，添加路由即可，具体参照[springbootplus文档](https://pro.ant.design/docs/router-and-nav-cn)
### data项配置说明

#### 实例
```
"key":{
  title: 'title',
  hideInSearch: true,
  hideInForm: true,
  hideInTable: true,
  valueType: valueType.dateTimePicker,
  valueEnum: {
    0: '女',
    1: '男',
  },
}
```

#### 说明
```
字段名 -- 必填 -- 作用 -- 默认值

title -- true -- 字段名 -- 无
hideInSearch -- false -- 控制在搜索栏显示 -- false
hideInForm -- false -- 控制在搜索栏显示 -- false
hideInTable -- false -- 控制在搜索栏显示 -- false
valueType --  false -- 控制在搜索栏显示 -- text
valueEnum -- false -- 默认值的下拉选择框(配合valueType = select使用效果最好)
```
