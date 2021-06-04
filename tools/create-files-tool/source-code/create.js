// 引入核心模块(fs)
var fs = require('fs')
const configData = fs.readFileSync('./config.json');
const pathfileDir = JSON.parse(configData.toString()).fileDirectory;
for (let i = 1; i < 31; i += 1) {
    // if (i < 10) {
    //     i = '0' + i;
    // }
    // API
    let b;
    if (i < 10) {
        b = '0' + i;
    } else {
        b = i;
    }
    fs.writeFile(pathfileDir + b + '.md', '', (error) => {

        // 创建失败
        if (error) {
            console.log(`创建失败：${error}`)
        }

        // 创建成功
        console.log(`${pathfileDir + b}.md  创建成功！`)

    })
}
setTimeout(() => {
    console.log('关闭窗口');
}, 100000);
