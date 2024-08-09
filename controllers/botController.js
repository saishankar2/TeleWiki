const { getRandomWikiArticle } = require('../models/wikiModel');
const { formatMessage } = require('../views/botMessages');

const sendRandomArticle = async (bot, userId) => {
    const article = await getRandomWikiArticle();
    if (!article) {
        bot.sendMessage(userId, 'Sorry,couldn’t fetch a random article.');
        return;
    }

    const opts = formatMessage(article);
    if (article.thumbnail) {
        bot.sendPhoto(userId, article.thumbnail, { ...opts, caption: opts.text });
    } else {
        bot.sendMessage(userId, opts.text, opts);
    }
};

const handleStartCommand = (bot, chatId) => {
    bot.sendMessage(chatId, 'Welcome to WikiPulseBot! Type /random to get a random Wikipedia article.');
};

module.exports = {
    sendRandomArticle,
    handleStartCommand,
};
