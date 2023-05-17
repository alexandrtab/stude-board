import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { INews, IArticle } from "./news.types";

export const newsApi = createApi({
    reducerPath: "api/news",
    baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
    endpoints: (build) => ({
        getNews: build.query<INews, number>({
            query: (page: number) =>
                `top-headlines?country=us&category=technology&pageSize=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
        }),
        getNewsBySearch: build.query<IArticle, string>({
            query: (search: string) =>
                `top-headlines?country=us&category=technology&q=${search}pageSize=20&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
        }),
    }),
});

export const { useGetNewsQuery, useGetNewsBySearchQuery } = newsApi;
