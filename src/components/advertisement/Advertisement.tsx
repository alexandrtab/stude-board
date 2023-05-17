import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks/useRedux";
import { IArticle } from "../../app/store/news/news.types";
import { setActiveNews } from "../../entities/news/modal/NewsSlice";
import { Button } from "../button/Button";

interface IAdvertisement {
    news: IArticle;
}
export const Advertisement: React.FC<IAdvertisement> = ({ news }) => {
    const { urlToImage, title, type, publishedAt } = news;
    const dispatch = useAppDispatch();
    const handleAddActiveNews = (activeNews: IArticle) => {
        dispatch(setActiveNews(activeNews));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="advertisement">
            <img src={ urlToImage } alt={ title } />
            <h3>{title.substring(0, 80).concat("...")}</h3>
            <div className="advertisement__type">
                <p>{type}</p>
            </div>
            <div className="advertisement__date">
                <p> Опубликовано : {publishedAt}</p>
            </div>
            <div className="advertisement__button">
                <Link to={ "/card" }>
                    <Button type="button" isSmall={ true } text="Посмотреть детали" onButtonClick={ () => handleAddActiveNews(news) }/>
                </Link>
            </div>
        </div>
    );
};
