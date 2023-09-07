import {Theme, Themes} from "../models/theme";
import sun from '../assets/images/sun.svg';
import moon from '../assets/images/moon.svg';

const light: Theme = {
  name: 'light',
  colors: {
    bgPrimary: '#4682b4',
    bgSecondary: '#EDF0F1',
  },
  image: moon,
};

const dark: Theme = {
  name: 'dark',
  colors: {
    bgPrimary: 'black',
    bgSecondary: 'gray',
  },
  image: sun,
};

export const themes: Themes = {
  light: light,
  dark: dark,
};