import React from "react";
import ContentLoader from "react-content-loader";

const AdvLoader: React.FC = () => (
    <ContentLoader
        speed={ 2 }
        width={ 264 }
        height={ 460 }
        viewBox="0 0 264 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <path d="M 0 290 h 91 v 18 H 0 z M 0 218 h 264 v 46 H 0 z M 21 415 h 228 v 45 H 21 z M 0 0 h 264 v 196 H 0 z M 0 343 h 131 v 18 H 0 z" />
    </ContentLoader>
);

export default AdvLoader;
