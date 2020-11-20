const fs = require('fs');
const util = require('util')
const ejs = require('ejs')
const {config} = require('./config');

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mkdir = util.promisify(fs.mkdir)
const readdir = util.promisify(fs.readdir)


const { data, moduleName, serverURL }= config;

async function init(interfaceData, columnsData) {
   // 读取template里面所有的文件
   const files = await readdir("./template")
    files.map(async file=> {
    // 读取文件
    const result = await readFile(`./template/${file}`);
    const renderData =  ejs.render(result.toString(),  {
      interfaceData,
      columnsData,
      moduleName,
      serverURL
    });
    // 创建目录
    await mkdir(`./${moduleName}/components`, { recursive: true });
    // 写入文件
    file = file.substring(0,file.lastIndexOf('.'))
    // 新增和修改放入不同的文件夹
    if(file === 'ModalForm'){
      await writeFile(`./${moduleName}/components/${file}.tsx`, renderData);
    }else if(file === 'index'){
      await writeFile(`./${moduleName}/${file}.tsx`, renderData);
    } else {
      await writeFile(`./${moduleName}/${file}.ts`, renderData);
    }
   })
}

// data.d.ts数据
const interfaceData = []
// columns 和 表单数据
const columnsData = []

// interface数组转换，除了ProFormDigit为number,别的都为string
const interfaceConversion = (value) => {
  let result;
  if(value === 'ProFormDigit'){
    result = 'number'
  }else {
    result = 'string'
  }
  return result;
}

// columns 列表转换
const columnsConversion = (value) => {
  let result;
  switch (value) {
    case 'ProFormText':
      result = 'text';
      break;
    case 'ProFormDatePicker':
      result = 'date';
      break;
    case 'ProFormDateTimePicker':
      result = 'dateTime';
        break;
   case 'ProFormDateRangePicker':
      result = 'dateRange';
        break;
    case 'ProFormDateTimeRangePicker':
      result = 'dateTimeRange';
        break
    case 'ProFormTimePicker':
      result = 'time';
        break
    case 'ProFormDigit':
      result = 'digit';
        break
    default:
      break;
  }
  return result;
}



for(let i in data){
    // 接口
    interfaceData.push({
      name: i,
      value: interfaceConversion(data[i].valueType)
    })
    // collom
    columnsData.push({
      dataIndex: i, title: data[i].title,
      sorter:  data[i].sorter,
      type: columnsConversion(data[i].valueType),
      valueType:  data[i].valueType,
      valueEnum: data[i].valueEnum,
      hideInSearch: data[i].hideInSearch,
      hideInTable: data[i].hideInTable,
      hideInForm: data[i].hideInForm,
    })
}



console.log(columnsData, "columnsData")

init(interfaceData, columnsData)
