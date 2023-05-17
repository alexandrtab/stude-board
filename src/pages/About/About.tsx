import React from "react";

import ManWorking from "../../shared/assets/man-working.png";

export const About = () => {
    return (
        <div>
            <div className="aboutUs__banner"></div>
            <div className="aboutUs__content">
                <div className="aboutUs__wrapper">
                    <div className="aboutUs__wrapper-mini" >
                        <h2>О НАС</h2>
                        <h4>
                            Stude board - доска объявлений для учащихся учреждений образования
                        </h4>
                    </div>
                    <div className="aboutUs__wrapper-max">
                        <p>
                            Stude Board - информативная доска объявлений для учащихся
                            учреждений образований, которая позволяет получать всю необходимую
                            учебную информацию. Интуитивно понятный дизайн и высокая скорость
                            работы вызывают положительные эмоции и удобство при использовании
                            данным сервисом.
                        </p>
                    </div>
                </div>
                <div className="aboutUs__wrapper">
                    <div className="aboutUs__wrapper-mini">
                        <p>
                            Stude Board - является курсовой работой студента Минского
                            радиотехнического колледжа по дисциплине Технология разработки
                            программного обеспечения.
                        </p>
                    </div>
                    <div className="aboutUs__wrapper-max">
                        <img src={ ManWorking } alt="о нас" />
                    </div>
                </div>
            </div>
        </div>
    );
};
