import BaseAPI from './Base';

class QuestionsAPI extends BaseAPI {
    getList(requestText) {
        return this.apiClient.get(`search/advanced?order=desc&sort=activity&title=${requestText}&site=stackoverflow`);
    }

    getListByTag(tagName) {
        return this.apiClient.get(`questions?order=desc&sort=activity&tagged=${tagName}&site=stackoverflow`);
    }

    getListByAuthor(authorId) {
        return this.apiClient.get(`users/${authorId}/questions?order=desc&sort=activity&site=stackoverflow`);
    }

    getQuestion(questionId) {
        return this.apiClient.get(`questions/${questionId}?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wwK0y`);
    }

    getAnswers(questionId) {
        return this.apiClient.get(`questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wzfpy`);
    }
}

export default QuestionsAPI;
