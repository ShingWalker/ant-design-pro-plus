// 配置文件
exports.config = {
    // 模块名
    moduleName: 'User',
    // 表格里面列名和interface里TableListItem类型
    columnsData : {
        "key":99,
        "disabled":false,
        "href":"https://ant.design",
        "avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
        "name":"TradeCode 99",
        "owner":"曲丽丽",
        "desc":"这是一段描述",
        "callNo":57,
        "status":2,
        "updatedAt":"2020-11-13T01:11:25.785Z",
        "createdAt":"2020-11-13T01:11:25.785Z",
        "progress":35
    },
    // server层增删改查接口地址
    serverURL:{
        updateURL: 'updateURL',
        addURL: 'addURL',
        removeURL: 'removeURL',
        queryURL: 'queryURL',
    }

}
