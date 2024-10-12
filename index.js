const TelegramAPI = require('node-telegram-bot-api');
const token = '7610525348:AAH_T84bSniYCIZdXCp97HMjvphtVtwMMeM';

const bot = new TelegramAPI(token, { polling: true });

bot.on('message', (msg) => {
    
})