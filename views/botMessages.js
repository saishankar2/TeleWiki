const formatMessage = (article) => {
    const text = `<b>${article.title}</b> - ${article.extract}`;
    const reply_markup = JSON.stringify({
        inline_keyboard: [
            [{ text: 'Open on Wikipedia', url: article.url }],
            [{ text: 'Give me one more', callback_data: 'answer' }],
        ],
    });
    
    return { text, reply_markup, parse_mode: 'html' };
};

module.exports = { formatMessage };
