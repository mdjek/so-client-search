import BaseAPI from './Base';

class QuestionsAPI extends BaseAPI {
    getList(requestText) {
        return this.apiClient.get(`search/advanced?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&title=${requestText}&filter=default`,);
    }

    getListByTag(tagName) {
        return this.apiClient.get(`/2.2/questions?order=desc&sort=activity&tagged=${tagName}&site=stackoverflow`);
    }

    getListByAuthor(authorId) {
        return this.apiClient.get(`users/${authorId}/questions?order=desc&sort=activity&site=stackoverflow`);
    }
}

export default QuestionsAPI;
