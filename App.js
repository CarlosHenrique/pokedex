import { Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { textColors } from "./src/assets/colors";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={textColors.white} />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}
