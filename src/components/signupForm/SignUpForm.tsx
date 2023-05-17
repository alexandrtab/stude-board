import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks/useRedux";
import { setUser } from "../../entities/user/modal/UserSlice";
import { handleToggleForm } from "../../utils/ToggleForm";

export const SignUpForm = () => {
    interface ISignUpFileds {
        name: string;
        group: string;
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
    } = useForm<ISignUpFileds>({ mode: "onChange" });
    const onSubmit: SubmitHandler<ISignUpFileds> = ({ email, password, name, group }) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
            dispatch(
                setUser({
                    email: user.email,
                    password: password,
                    name: name,
                    group: group,
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
            <h1>Создать аккаунт</h1>
            <input
                { ...register("name", { required: "Name is required field!" }) }
                type="text"
                className="input"
                placeholder="Введите ваше имя"
            />
            {errors?.name && (
                <div style={ { color: "red" } }>{errors.name.message}</div>
            )}
            <input
                { ...register("group", { required: "group is required field!" }) }
                type="text"
                className="input"
                placeholder="Введите номер вашей группы"
            />
            {errors?.group && (
                <div style={ { color: "red" } }>{errors.group.message}</div>
            )}
            <input
                { ...register("email", { required: "email is required field!" }) }
                type="email"
                className="input"
                placeholder="Введите ваш e-mail"
            />
            {errors?.email && (
                <div style={ { color: "red" } }>{errors.email.message}</div>
            )}
            <input
                { ...register("password", { required: "password is required field!" }) }
                type="password"
                className="input"
                placeholder="Введите пароль (не менее 6 символов)"
            />
            {errors?.password && (
                <div style={ { color: "red" } }>{errors.password.message}</div>
            )}
            <input
                type="submit"
                className="input input-submit"
                value="ЗАРЕГИСТРИРОВАТЬСЯ"
            />
            <p className="signup">
                Уже есть аккаунт?{" "}
                <a href="#" onClick={ () => handleToggleForm() }>
                    Войти.
                </a>
            </p>
        </form>
    );
};
