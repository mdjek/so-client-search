/**
 * Функция для склонения существительного в зависимости от количества элементов
 * @param {number} num Число
 * @param {string} oneName Название одного элемента (1 "ответ")
 * @param {string} twoName Название двух элементов (2 "ответа")
 * @param {string} fiveName Название пяти элементов (5 "ответов")
 * @returns {string}
 */
export const getNumberCase = (num, oneName, twoName, fiveName) => {
    const absNum = Math.abs(num);
    const i = (absNum % 100 > 20) ? absNum % 10 : absNum % 20;

    // Если не целое число
    if (i % 1 !== 0) {
        return twoName;
    }

    switch (i) {
        case 1:
            return oneName;

        case 2:
        case 3:
        case 4:
            return twoName;

        default:
            return fiveName;
    }
};
