import { configureStore } from "@reduxjs/toolkit";
import todo from "./todoSlicer";

export const store = configureStore({
    reducer: {
        todo: todo
    }
})