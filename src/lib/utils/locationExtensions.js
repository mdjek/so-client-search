/**
 * Получение значения по параметру в url
 * @param {string} name
 * @param {string} url
 * @returns {string}
 */
const getQueryParams = (name, url = window.location.href) => {
    const updatedName = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]'); // eslint-disable-line no-useless-escape
    const regexS = '[\\?#/&]' + updatedName + '=([^&#]*)'; // eslint-disable-line prefer-template
    const regex = new RegExp(regexS);
    const results = regex.exec(url);

    return results === null ? null : results[1];
};

export default getQueryParams;