import BaseAPI from './Base';

class QuestionsAPI extends BaseAPI {
    getTypeList() {
        return this.apiClient.get('Dictionaries/Doctypes');
    }

    getDocument(docId, versionId) {
        return this.apiClient.get(`Documents/${docId}`, versionId);
    }

    getVersionList(docId, data) {
        return this.apiClient.get(`Documents/${docId}/Versions`, data);
    }


    getQuestionList(requestText) {
        return this.apiClient.get(`search/advanced?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&title=${requestText}&filter=default`,);
    }
}

export default QuestionsAPI;
