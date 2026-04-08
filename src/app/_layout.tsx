import { Stack } from "expo-router";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

import "../../global.css";

export default function RootLayout() {
  const colorSchema = useColorScheme();

  return (
    <ThemeProvider value={colorSchema === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
