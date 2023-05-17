import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks/useRedux";
import { handleToggleForm } from "../../utils/ToggleForm";
import { setUser } from "../../entities/user/modal/UserSlice";

export const SignInForm = () => {
    interface ISignInFileds {
        email: string;
        password: string;
    }
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ISignInFileds>({ mode: "onChange" });
    const onSubmit: SubmitHandler<ISignInFileds> = ({ email, password }) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password).then(({ user }) =>
            dispatch(
                setUser({
                    email: user.email,
                })
            )
        ).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(`${errorCode} : ${errorMessage}`);
        });
        navigate("/");
        reset();
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <h1>Войти</h1>
            <input { ...register("email", { required: "Email is required field!" }) } type="email" className="input" placeholder="Введите ваш e-mail"/>
            {errors?.email && (
                <div style={ { color: "red" } }>{errors.email.message}</div>
            )}
            <input { ...register("password", { required: "Password is required field!" }) } type="password" className="input" placeholder="Введите пароль"/>
            {errors?.password && (
                <div style={ { color: "red" } }>{errors.password.message}</div>
            )}
            <input type="submit" className="input input-submit" value="ВОЙТИ"/>
            <p className="signup">Нет аккаунта? <a href="#" onClick={ () => handleToggleForm() }>Зарегистрироваться.</a></p>
        </form>
    );
};
