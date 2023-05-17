import React from "react";

import SignInImg from "../../shared/assets/minimalism-white.png";
import SignUpImg from "../../shared/assets/black-mcbook.jpg";
import { SignInForm } from "../../components/signinForm/SignInForm";
import { SignUpForm } from "../../components/signupForm/SignUpForm";

export const SignUp = () => {
    return (
        <div className="container">
            <section>
                <div className="wrapper">
                    <div className="user signinBx">
                        <div className="imgBx">
                            <img src={ SignInImg } alt="SignInImg"/>
                        </div>
                        <div className="formBx">
                            <SignInForm/>
                        </div>
                    </div>
                    <div className="user signupBx">
                        <div className="formBx">
                            <SignUpForm/>
                        </div>
                        <div className="imgBx">
                            <img src={ SignUpImg } alt="SignUpImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
