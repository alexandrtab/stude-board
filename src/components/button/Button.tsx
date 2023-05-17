import React from "react";

interface IButton {
    type: "button" | "submit" | "reset" | undefined;
    text: string;
    isEmpty?: boolean;
    isBig?: boolean;
    isSmall?: boolean;
    isLogout?: boolean;
    onButtonClick: () => void;
}
export const Button: React.FC<IButton> = ({
    type,
    text,
    isEmpty,
    isBig,
    isSmall,
    isLogout,
    onButtonClick,
}) => {
    return (
        <button
            className={ `btn
            ${isEmpty ? "btn-empty" : null}
            ${isBig ? "btn-big" : null}
            ${isSmall ? "btn-small" : null}
            ${isLogout ? "btn-logout" : null}`
            }
            type={ type }
            onClick={ () => onButtonClick() }
        >
            {text}
        </button>
    );
};
