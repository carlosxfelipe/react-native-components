import { Linking, Text, useColorScheme, View } from "react-native";

const StarterComponent = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ color: isDarkMode ? "white" : "black" }}>
        Obrigado por experimentar o Storybook, siga o{" "}
        <Text
          style={{
            color: isDarkMode ? "yellow" : "blue",
            textDecorationLine: "underline",
            textDecorationColor: isDarkMode ? "yellow" : "blue",
          }}
          onPress={() =>
            Linking.openURL(
              "https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/"
            )
          }
        >
          tutorial
        </Text>{" "}
        para aprender a criar suas próprias histórias.
      </Text>
    </View>
  );
};

const meta = {
  title: "Welcome",
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
