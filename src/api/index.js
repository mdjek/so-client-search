import ApiClient from './ApiClient';
import QuestionsAPI from './Questions';

export default {
    questions: new QuestionsAPI({
        apiClient: new ApiClient(),
    }),
};
