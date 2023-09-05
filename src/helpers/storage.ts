import {RootState} from "../store";
const LOCAL_STORAGE_KEY = 'todoAppState';

export const saveToLocalStorage = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, appState);
  } catch (error) {
    console.warn(error);
  }
}

export const loadFromLocalStorage = () => {
  try {
    const appState = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!appState) return undefined;

    return JSON.parse(appState);
  } catch (error) {
    console.warn(error);
    return undefined;
  }
}