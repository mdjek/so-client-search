import BaseAPI from './Base';

class QuestionsAPI extends BaseAPI {
    getList(requestText) {
        return this.apiClient.get(`/2.2/search/advanced?order=desc&sort=activity&title=${requestText}&site=stackoverflow`);
    }

    getListByTag(tagName) {
        return this.apiClient.get(`questions?order=desc&sort=activity&tagged=${tagName}&site=stackoverflow`);
    }

    getListByAuthor(authorId) {
        return this.apiClient.get(`users/${authorId}/questions?order=desc&sort=activity&site=stackoverflow`);
    }
}

export default QuestionsAPI;
