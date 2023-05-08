const { stdout } = require('process');
const { createInterface } = require('readline');
const path = require('path');
const fs = require('fs');
const pathInputed = path.join(__dirname, 'message.txt');
const output = fs.createWriteStream(pathInputed);

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const closeApp = () => {
  stdout.write('До свидания!Рад был вас услышать!Приходите ещё!!');
  rl.close()
};

stdout.write('Введите какой-нибудь текст! Ну пожаааалуйста...Мне очень надо!\n');

rl.on('line', data => {
  data.trim().toLowerCase() === 'exit' ? closeApp() : output.write(data + '\n')});

rl.on('SIGINT', () => closeApp());