import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/globals.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Routing } from "./pages/Routing";
import { store } from "./app/store/store";
import { ScrollToTop } from "./utils/ScrollToTop";
import "./firebase";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <ScrollToTop/>
                <Routing />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
