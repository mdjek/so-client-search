import AppHistory from '../../app/history';

export const goTo = (responseText) => () => {
    AppHistory.push(`/search/?text=${responseText}`);
};