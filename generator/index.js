const fs = require('fs');
const util = require('util')
const ejs = require('ejs')
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mkdir = util.promisify(fs.mkdir)
const readdir = util.promisify(fs.readdir)
const config = require('./config').config;

let columnsData = config.columnsData;
let moduleName =  config.moduleName;
let serverURL = config.serverURL;
/**
 * 首字母大写
 * @returns {string}
 */
String.prototype.toUpFirst = function () {
    return this.substring(0, 1).toUpperCase() + this.substring(1);
}
/**
 * 首字母小写
 * @returns {string}
 */
String.prototype.toLowFirst = function () {
    return this.substring(0, 1).toLowerCase() + this.substring(1);
}

async function init(interfaceData) {
   // 读取template里面所有的文件
   let files = await readdir("./template")
    files.map(async file=> {
    // 读取文件
    let data = await readFile(`./template/${file}`);
    let renderData =  ejs.render(data.toString(),  {
      interfaceData: interfaceData,
      moduleName: moduleName,
      serverURL: serverURL,

    });
    // 创建目录
    await mkdir(`./${moduleName}/components`, { recursive: true });
    // 写入文件
    file = file.substring(0,file.lastIndexOf('.'))
    // 新增和修改放入不同的文件夹
    if(file === 'CreateForm' || file === 'UpdateForm'){
      await writeFile(`./${moduleName}/components/${file}.ts`, renderData);
    }else {
      await writeFile(`./${moduleName}/${file}.ts`, renderData);
    }
   })
}


let array = []
let keys = Object.keys(columnsData)
for (let i = 0; i <Object.keys(columnsData).length; i++){
    let type = typeof columnsData[keys[i]];
    // 对象 null {} []
    if(type === "object"){
        if(columnsData[keys[i]] === null){
            // null
            console.log("null")
        }else if(columnsData[keys[i]] instanceof Array){
            // []
            console.log("array")

        }else if(columnsData[keys[i]] instanceof Object){
            // {}
            console.log("object")
        }
    } else {
        // 普通类型
        array.push({name:keys[i], value: typeof columnsData[keys[i]]})
    }
}
init(array)
