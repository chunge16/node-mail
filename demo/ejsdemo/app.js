const ejs = require('ejs'); //ejs模版引擎
const fs  = require('fs'); //文件读写
const path = require('path'); //路径配置
var http = require('http');

//传给EJS的数据
let data={
    title:'nice to meet you~',
    lastDay: 123,
    weatherTip: '有些热了，记得多喝热水',
    threeDaysData: [],
    todaystr: '测试',
    todayOneData: {
        imgUrl: '',
        type: 'type',
        text: '长长久久'
    }
};

//将目录下的mail.ejs获取到，得到一个模版
const template = ejs.compile(fs.readFileSync(path.resolve(__dirname, 'mail.ejs'), 'utf8'));
//将数据传入模版中，生成HTML
const html = template(data);


//1. 创建http服务器，方便查询模板渲染效果
// 参数: 请求的回调, 当有人访问服务器的时候,就会自动调用回调函数
var server = http.createServer( (request, response) => {
    console.log('有人访问了服务器');
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    //回调数据
    response.end(html)
});

server.listen(3000, () => {
    console.log('监听端口3000');
});