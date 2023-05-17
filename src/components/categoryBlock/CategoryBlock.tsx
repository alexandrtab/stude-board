import React from "react";

interface ICategoryBlock {
    text: string;
    logo: string;
}
export const CategoryBlock: React.FC<ICategoryBlock> = ({ logo, text }) => {
    return (
        <div className="category">
            <div className="category__content">
                <img src={ logo }/>
                <p>{text}</p>
            </div>
        </div>
    );
};
