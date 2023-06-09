export interface IArticle {
    source: {
        id: string;
        name: string;
    }
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    image: string;
    type: string;
    date: string;
}
export interface INews {
    status: string;
    totalResults: number;
    articles: IArticle[];
}
