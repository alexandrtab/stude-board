import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../shared/assets/studeBoard.png";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-content__block">
                    <Link to="/">
                        <img className="logo" src={ Logo } />
                    </Link>
                    <p className="footer-moto">
                        Stude Board - доска объявлений для учащихся
                    </p>
                </div>
                <div className="footer-content__block">
                    <Link to="/schedule"><p>Расписание</p></Link>
                    <Link to="/filter"><p>Объявления</p></Link>
                </div>
                <div className="footer-content__block">
                    <Link to="/about"><p>О нас</p></Link>
                    <Link to="/contact"><p>Обратная связь</p></Link>
                </div>
            </div>
        </footer>
    );
};
