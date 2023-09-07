export interface Theme {
  name: string,
  colors: {
    bgPrimary: string,
    bgSecondary: string,
  },
  image: string,
}

export interface Themes {
  [key: string]: Theme,
}