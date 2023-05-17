import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IArticle } from "../../../app/store/news/news.types";

const initialState = {
    activeNews: null as IArticle | null,
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setActiveNews: (state, action: PayloadAction<IArticle>) => {
            state.activeNews = action.payload;
        },
    },
});

export const { setActiveNews } = newsSlice.actions;
