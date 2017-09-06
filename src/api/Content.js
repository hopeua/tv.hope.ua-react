import fetch from 'isomorphic-fetch';

/**
 * Список выпусков (новые, рекомендуемые, из программы...)
 * Список программ (популярные, все)
 * Программа по коду
 * Выпуск по коду
 */
class Content {
    static endpoint = 'https://tv.hope.ua/api';

    static async getArticles(params) {
        const resource = 'articles';
        const limit = 'limit=15';

        const url = `${this.endpoint}/${resource}.json?category=${params.type}&${limit}`;

        const response = await fetch(url);
        const result = await response.json();

        return result.data;
    }

    static async getArticleSingle(id) {
        const resource = 'articles';

        const url = `${this.endpoint}/${resource}/${id}.json`;

        const response = await fetch(url);
        const result = await response.json();

        return result.object;
    }

    static async getBanners() {
        const resource = 'banners';

        const url = `${this.endpoint}/${resource}.json`;

        const response = await fetch(url);
        const result = await response.json();

        return result.banners;
    }
}

export default Content;
