import { FC } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  green: "#1DB954",
  black: "#121212",
  background: "#212121",
  text: "#535353",
  title: "white",
};

const theme = {
  colors: lightTheme,
};

interface Props {
  children: any;
}

export const Theme: FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
