import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { newsSlice } from "../../entities/news/modal/NewsSlice";
import { userSlice } from "../../entities/user/modal/UserSlice";
import { newsApi } from "./news/news.api";

export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        news: newsSlice.reducer,
        user: userSlice.reducer,
    },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
