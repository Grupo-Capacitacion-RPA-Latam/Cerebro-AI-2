import types from "./actionTypes";

const setNews = (news) => {
    return {
        type: types.newsPage.SET_NEWS,
        payload: news,
    }
};

const setRelevantNews = (relevantNews) => {
    return {
        type: types.newsPage.SET_RELEVANT_NEWS,
        payload: relevantNews,
    }
};

const actions = {
    setRelevantNews,
    setNews,
};

export default actions;