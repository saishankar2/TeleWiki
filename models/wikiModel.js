const getRandomWikiArticle = async () => {
    const url = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';

    try {
        const response = await fetch(url);
        const data = await response.json();

        return {
            title: data.title,
            extract: data.extract,
            url: data.content_urls.desktop.page,
            thumbnail: data.thumbnail ? data.thumbnail.source : null,
        };
    } catch (error) {
        console.error('Error fetching the random Wikipedia article:', error);
        return null;
    }
};

module.exports = { getRandomWikiArticle };
