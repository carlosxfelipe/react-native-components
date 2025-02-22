import { useState } from "react";
import {
  LogBox,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
} from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Ignorar logs do Expo
LogBox.ignoreAllLogs();

function App() {
  return <HomeScreen />;
}

function HomeScreen() {
  const colorScheme = useColorScheme(); // Obtém o tema do sistema
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: isDark ? "#222" : "#fff" }]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={isDark ? "#222" : "#fff"}
      />
      <Text style={{ color: isDark ? "#fff" : "#000", fontSize: 18 }}>
        Para visualizar o Storybook, use o comando correto:
        {"\n"}- Navegador: yarn storybook
        {"\n"}- iOS: yarn storybook:ios
        {"\n"}- Android: yarn storybook:android
      </Text>

      <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
        <MaterialCommunityIcons
          name={isDark ? "weather-sunny" : "moon-waxing-crescent"}
          size={24}
          color={isDark ? "#fff" : "#222"}
        />
      </TouchableOpacity>
    </View>
  );
}

let AppEntryPoint = App;

// Verificar se o Storybook está ativado
if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  themeButton: {
    position: "absolute",
    top: Constants.statusBarHeight + 10,
    right: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "transparent",
  },
});

export default AppEntryPoint;
