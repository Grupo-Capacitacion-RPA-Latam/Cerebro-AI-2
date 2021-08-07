import types from "../actions/actionTypes";

const initialState = {
    news: [],
    showNews: false,
    relevantNews: []
};

const newsPage = (state=initialState, action) => {
    switch (action.type) {
        case types.newsPage.SET_NEWS:
            return {
                showNews: action.payload.showNews,
                news: action.payload.news,
                relevantNews: action.payload.relevantNews
            };
        default:
            return state;
    }
};

export default newsPage;