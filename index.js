const express = require('express');
let curlconverter;

// 使用动态import导入curlconverter
import('curlconverter').then((module) => {
    curlconverter = module;
});

// 初始化 Express app
const app = express();
app.use(express.json());

app.get('/:a', (req, res) => {
    let a = req.params.a;
    let obj=curlconverter;
    let k = Object.keys(obj).find(key => obj[key].toString() === a);
    let keys = [];
    if(!k){
        keys = Object.keys(obj).filter(key => {
            return obj[key].toString().includes(a) || obj[key].toString().toLowerCase().includes(a.toLowerCase());
          });
        console.log(keys)      
        k=keys[0]
    }
    if(k && a!=k){
        res.set('curlconverter',JSON.stringify(keys));
        const query = require('querystring').stringify(req.query);
        res.redirect(302,`/${k}?${query}`);    
    }
    if(k){
        res.set('Content-Type','text/javascript'); // default 'text/plain'  edge not break line
        let code = curlconverter[k](req.query.c);

        // if (req.headers['user-agent'].indexOf('Chrome') > -1) {
        //     code = code.replace(/\n/g, '\r\n');
        //   }
        res.send(code);
    }else{
        res.send(404,`Not found '${a}' in curlconverter\r\n`);
    }


});


let datetime=new Date().toLocaleString("zh-cn", {timeZone:'Asia/Shanghai'})  // 2024/4/7 11:47:59
//npm start --port=4455 会忽略掉 -后的一个整体，不能用这种形式
let port = process.env.port || 3000;
process.argv.slice(2).forEach(arg => {
    // 如果参数是一个整数，将其作为端口号
    if (!isNaN(arg)) {
        port = Number(arg);
    }

    // 如果参数是形如 "port=3000" 的字符串，解析出端口号
    if (arg.includes('=')) {
        const [key, value] = arg.split('=');
        if (key === 'port' || key === 'p') {
            port = Number(value);
        }
    }
});

app.listen(port, () => {
    console.log(`${datetime} curlconverter_backend is running on port ${port}`);
});