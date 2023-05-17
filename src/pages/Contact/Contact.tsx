import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";

import { db } from "../../firebase";

export const Contact = () => {
    interface IContactFileds {
        name: string;
        phone: number;
        email: string;
        inf: string;
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IContactFileds>({ mode: "onChange" });
    const onSubmit: SubmitHandler<IContactFileds> = async ({ email, phone, name, inf }) => {
        try {
            await addDoc(collection(db, "contact"), {
                name: name,
                phone: phone,
                email: email,
                inf: inf,
            });

            alert("Спасибо большое за отзыв! Письмо успешно доставлено! В ближайшее время мы отправим ответ на ваш e-mail ");
        } catch (e) {
            alert("Возникла ошибка, попробуйте позже");
        }

        reset();
    };

    return (
        <div className="contact">
            <form onSubmit={ handleSubmit(onSubmit) } className="contact__content">
                <h2>НАПИШИТЕ НАМ</h2>
                <input { ...register("name", { required: "Name is required field!" }) } type="text" className="input" placeholder="Ваше имя"/>
                <input { ...register("phone", { required: "Phone is required field!" }) } type="tel" className="input" placeholder="Ваш телефон"/>
                <input { ...register("email", { required: "Email is required field!" }) } type="email" className="input" placeholder="Ваш email"/>
                <input { ...register("inf") } className="input" type="text" placeholder="Дополнительная инмформация"/>
                <input type="submit" className="input input-submit" value="ОТПРАВИТЬ"/>
            </form>
        </div>
    );
};
