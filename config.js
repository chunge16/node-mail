const schedule = require("node-schedule"); //定时器任务库

/**
 * 配置参数
 * **/

const config =  {
    // 纪念日
    startDay: '2019-05-04',
    // 当地拼音,需要在下面的墨迹天气url确认
    local: 'chongqing/chongqing',
    // 发送者邮箱厂家
    EmianService: 'QQ',
    // 发送者邮箱账户SMTP授权码
    EamilAuth: {
        user: "1362598656@qq.com",
        pass: "oonxsfqjlyokghfi"
    },
    // 发送者昵称与邮箱地址
    EmailFrom: '"春哥" <1362598656@qq.com>',
    // 接收者邮箱地址
    EmailTo: '815361815@qq.com',
    // 邮件主题
    EmailSubject: '每日小邮件',
};

// 定时器循环的规则
config.RecurrenceRule = new schedule.RecurrenceRule();
config.RecurrenceRule.dayOfWeek = [0, new schedule.Range(1, 6)];
config.RecurrenceRule.hour = 8;
config.RecurrenceRule.minute = 30;


module.exports = config;