import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Slide } from "react-awesome-reveal";

import { Button } from "../../components/button/Button";
import { CategoryBlock } from "../../components/categoryBlock/CategoryBlock";
import { Advertisement } from "../../components/advertisement/Advertisement";
import {
    useGetNewsQuery,
    useGetNewsBySearchQuery,
} from "../../app/store/news/news.api";
import { ActualNews } from "../../components/actualNews/ActualNews";
import AdvLoader from "../../components/advertisement/AdvSkelton";
import Calendar from "../../shared/assets/calendar.png";
import Megaphone from "../../shared/assets/megaphone.png";
import Peoples from "../../shared/assets/peoples.png";
import Feedback from "../../shared/assets/feedback.png";
import { INews } from "../../app/store/news/news.types";

export const Home: React.FC = () => {
    const [limit, setLimit] = useState<number>(20);
    const [search, setSearch] = useState<string>("");
    const { data, isLoading, error, isFetching } = useGetNewsQuery(limit);
    // const { post, isLoading, error } = useGetNewsBySearchQuery(search);
    const categories = [
        { img: Calendar, text: "Расписание", url: "/calendar" },
        { img: Megaphone, text: "Объявления", url: "/filtr" },
        { img: Peoples, text: "О нас", url: "/about" },
        { img: Feedback, text: "Обратная связь", url: "/contact" },
    ];

    return (
        <main className="home">
            <div className="home-banner">
                <div className="home-banner__txt">
                    <p>stude board — Доска объявлений для учащихся</p>
                </div>
            </div>
            <div className="container">
                <div className="home__element">
                    {categories.map(({ img, text, url }, id) => (
                        <Link key={ id } to={ url }>
                            <CategoryBlock key={ id } logo={ img } text={ text } />
                        </Link>
                    ))}
                </div>
                <div className="home__element">
                    <input placeholder="Быстрый поиск" className="input input-huge" type="search" />
                    <Button
                        type="button"
                        text="Искать"
                        isEmpty={ true }
                        onButtonClick={ () => {} }
                    />
                </div>
                <ActualNews />
                <div>
                    <div>
                        <h2>Все объявления</h2>
                    </div>
                    <div className="advertisements">
                        {error ? (
                            <h3 style={ { color: "red" } }>
                                Something went wrong. Try later!😢
                            </h3>
                        ) : ("")}
                        {isLoading
                            ? Array(20)
                                .fill("")
                                .map((_, id) => <AdvLoader key={ id } />) : ""}
                        {data?.articles
                            ? data.articles
                                .slice(4, data?.articles?.length)
                                .map((item, id) => (<Slide direction={ "up" } triggerOnce={ true } key={ id }><Advertisement key={ id } news={ item } /></Slide>)) : ""}
                    </div>
                </div>
                <div className="home__pagination-btn">
                    <Button
                        type="button"
                        text={ `${isFetching ? "Загрузка" : "Смотреть более"} ` }
                        onButtonClick={ () => { setLimit(limit + 20); } }
                    />
                </div>
            </div>
        </main>
    );
};
