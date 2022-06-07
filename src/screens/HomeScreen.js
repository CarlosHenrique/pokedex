import React from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import pokeball_header from "../assets/Images/pokeball_header.png";
import { height } from "../assets/constants";
import commonStyles from "../styles/commonStyles";

export default function HomeScreen() {
    
  return (
    <SafeAreaView>
      <ImageBackground
        resizeMode="contain"
        style={{ width: "100%", height: height/4}}
        source={pokeball_header}
      >
        <Text style={commonStyles.heading}>Pokédex</Text>
        <Text>Search for Pokémon by name or using the National Pokédex number.</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
