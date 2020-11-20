// FORM valueType值
const valueType = {
  "text": "ProFormText", // 支持search
  "psd": "ProFormText.Password",
  "datePicker": "ProFormDatePicker", // 支持search
  "dateTimePicker": "ProFormDateTimePicker", // 支持search
  "dateRangePicker": "ProFormDateRangePicker", // 支持search
  "dateTimeRangePicker": "ProFormDateTimeRangePicker", // 支持search
  "timePicker": "ProFormTimePicker", // 支持search
  "textArea": "ProFormTextArea",
  "checkbox": "ProFormCheckbox",
  "radio": "ProFormRadio.Group",
  "switch": "ProFormSwitch",
  "rate": "ProFormRate",
  "slider": "ProFormSlider",
  "uploadDragger": "ProFormUploadButton",
  "select": "ProFormSelect",
  "selectReq": "ProFormSelectReq",
  "digit": "ProFormDigit" // 支持search
}

// 配置文件
exports.config = {
    // 模块名
    moduleName: 'User',

    data: {
      "username":{
        title: '用户名',
        hideInTable: true,
      },
      "nickname":{
        title: '昵称',
      },
      "phone":{
        title: '手机号码',
      },
      "gender":{
        title: '性别',
        valueEnum: {
          0: '女',
          1: '男',
        },
      },
      "head":{
        title: '头像',
      },
      "state":{
        title: '状态',
        valueType: valueType.select,
      },
      "createTime":{
        title: '创建时间',
        hideInSearch: true,
        hideInForm: true,
        valueType: valueType.dateTimePicker,
      },
      "updateTime":{
        title: '修改时间',
        hideInSearch: true,
        hideInForm: true,
        valueType: valueType.dateTimePicker,
      },
      "createdAtRange":{
        title: '时间区间',
        hideInTable: true,
        hideInForm: true,
        valueType: valueType.dateRangePicker,
      },
   },

    // server层增删改查接口地址
    serverURL:{
        queryURL: '/sysUser/getPageList',
        addURL: 'addURL',
        updateURL: 'updateURL',
        removeURL: 'removeURL',
    }
}
