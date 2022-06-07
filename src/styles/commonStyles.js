import { StyleSheet } from "react-native";
import { textColors } from "../assets/colors";
import { useFonts } from 'expo-font';

const [loaded] = useFonts({
    SF: require('../assets/Fonts/SF-Pro-Display-Bold.otf'),
});

const fontFamily = StyleSheet.create({
    bold:{
        fontFamily: loaded.SF,
    },
})

export default StyleSheet.create({
    heading:{
        fontSize: 32,
        fontWeight: "700",
        color: textColors.black,
        ...fontFamily.bold
    },
})