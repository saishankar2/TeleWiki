const { sendRandomArticle, handleStartCommand, handleCallbackQuery } = require('../controllers/botController');

const botRoutes = (bot) => {
    bot.onText(/\/random/, (msg) => {
        const chatId = msg.chat.id;
        sendRandomArticle(bot, chatId);
    });

    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        handleStartCommand(bot, chatId);
    });

    bot.on('callback_query', (callbackQuery) => {
        // console.log("callback", callbackQuery);
        const msg = callbackQuery.message;
        const chatId = msg.chat.id;
        if (callbackQuery.data === 'answer') {
            sendRandomArticle(bot, chatId);
        }
    });
};

module.exports = botRoutes;
