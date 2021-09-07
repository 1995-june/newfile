const fs = require('fs');
const inquirer = require('inquirer')

const pormptList = [{
    type: 'input',
    message: '请输入新文件的文件名:',
    name: 'name',
    default: "test_user"
}]

const concat = (name) => {

    inquirer.prompt(pormptList).then((answers) => {
        console.log(answers);
        const dirPath = fs.mkdirSync(process.cwd() + '/' + name, { recursive: true });
        console.log(dirPath);
    })


}
module.exports = concat;