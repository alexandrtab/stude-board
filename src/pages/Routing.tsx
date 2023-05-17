import React from "react";
import { Routes, Route } from "react-router-dom";

import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { About } from "./About/About";
import { Account } from "./Account/Account";
import { Card } from "./Card/Card";
import { Contact } from "./Contact/Contact";
import { Filtr } from "./Filtr/Filtr";
import { Home } from "./Home/Home";
import { Calendar } from "./Calendar/Calendar";
import { Notfoundpage } from "./Notfounpage/Notfoundpage";
import { SignUp } from "./SignUp/SignUp";

export const Routing: React.FC = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/account" element={ <Account /> } />
                <Route path="/card" element={ <Card /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/filtr" element={ <Filtr /> } />
                <Route path="/signup" element={ <SignUp /> } />
                <Route path="/calendar" element={ <Calendar /> } />
                <Route path="*" element={ <Notfoundpage /> } />
            </Routes>
            <Footer />
        </>
    );
};
