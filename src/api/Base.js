class BaseAPI {
    constructor({ apiClient }) {
        if (!apiClient) {
            throw new Error('[apiClient] is required');
        }

        this.apiClient = apiClient;
    }
}

export default BaseAPI;
