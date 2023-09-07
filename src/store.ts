import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./features/todoListSlice";
import themeReducer from "./features/themeListSlice";
import {loadFromLocalStorage, saveToLocalStorage} from "./helpers/storage";

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    themeList: themeReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;