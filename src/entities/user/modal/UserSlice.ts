import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserFields } from "../../../app/store/user/user.types";

const initialState: IUserFields = {
    name: "",
    email: "",
    password: "",
    group: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        removeUser: (state) => {
            state.name = "";
            state.email = "";
            state.password = "";
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;
