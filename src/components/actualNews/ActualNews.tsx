import React from "react";

import { useGetNewsQuery } from "../../app/store/news/news.api";
import { Advertisement } from "../advertisement/Advertisement";
import AdvLoader from "../advertisement/AdvSkelton";

export const ActualNews = () => {
    const { data, isLoading, error } = useGetNewsQuery(20);

    return (
        <>
            <div>
                <h2>Последние актуальные объявления</h2>
            </div>
            <div className="advertisements">
                {error ? (<h3 style={ { color: "red" } }>Something went wrong. Try later!😢</h3>) : ""}
                {isLoading
                    ? Array(4)
                        .fill("")
                        .map((_, id) => <AdvLoader key={ id } />)
                    : data?.articles
                        ?.slice(0, 4)
                        .map((item, id) => (
                            <Advertisement
                                key={ id }
                                news={ item }
                            />
                        ))}
            </div>
        </>
    );
};
