import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import Logo from "../../shared/assets/studeBoard-black.png";
import Person from "../../shared/assets/person.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useRedux";
import { Button } from "../button/Button";
import { removeUser } from "../../entities/user/modal/UserSlice";
import { useAuth } from "../../app/hooks/userAuth";

export const Header: React.FC = () => {
    const { email } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();
    const { isAuth } = useAuth();
    const handleLogOut = () => {
        dispatch(removeUser());
        const auth = getAuth();

        signOut(auth).then(() => {
            alert("Log out SUCCESS!");
        }).catch((error) => {
            alert(error);
        });
    };

    return (
        <header>
            <div className="header-content">
                <Link to="/">
                    <img className="logo" src={ Logo } />
                </Link>
                <Link to={ "/signup" }><div className="header-content__user-block">
                    <img src={ Person } />
                    <h4>{email}</h4>
                    {isAuth ? <Button type="button" isLogout={ true } text="Log out" onButtonClick={ () => handleLogOut() }/> : null}
                </div>
                </Link>
            </div>
        </header>
    );
};
