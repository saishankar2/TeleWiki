const TelegramBot = require('node-telegram-bot-api');
const botConfig = require('./config/botConfig');
const botRoutes = require('./routes/botRoutes');

const bot = new TelegramBot(botConfig.token, { polling: true });
botRoutes(bot);

console.log('WikiPulseBot is running...');