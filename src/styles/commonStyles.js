import { StyleSheet } from "react-native";
import { textColors } from "../assets/colors";

const fontFamily = StyleSheet.create({
    bold:{
        fontFamily: 'SF-Pro-Display-Bold',
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