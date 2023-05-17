import React from "react";

import { useAppSelector } from "../../app/hooks/useRedux";
import { ActualNews } from "../../components/actualNews/ActualNews";

export const Card = () => {
    const { activeNews } = useAppSelector((store) => store.news);

    if (!activeNews) {
        return <h1>На сегодня это все новости. Чтобы узать больше, вернитесь на главную страницу!</h1>;
    }

    const { title, publishedAt, description, urlToImage, url } = activeNews;

    return (
        <div className="container news">
            <div className="news__banner">
                <img src={ urlToImage } alt={ title }/>
            </div>
            <div className="news__title">
                <h3>{title}</h3>
            </div>
            <div className="news__description-head">
                <p>Описание</p>
                <p>{publishedAt}</p>
            </div>
            <div className="news__description">{description}<a target="_blank" href={ url } rel="noreferrer"> Читать далее... </a></div>
            <ActualNews/>
        </div>
    );
};
