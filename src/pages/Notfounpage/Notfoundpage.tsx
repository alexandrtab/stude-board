import React from "react";
import { Link } from "react-router-dom";

export const Notfoundpage = () => {
    return (
        <div className="notfoundpage">
            <h1 className="notfoundpage__title">
                This page doesn't exist 🥺 Return back to
                <Link to={ "/" }>
                    <h1>HOME</h1>
                </Link>
            </h1>
        </div>
    );
};
