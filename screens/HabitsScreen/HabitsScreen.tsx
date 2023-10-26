import { StyleSheet, Text, View, ImageBackground } from "react-native"
import React from "react"
import Constants from "expo-constants"
import { standardStyles } from "../../styles"
import HabitsContainer from "./components/HabitsContainer"

const HabitsScreen = () => {
    return (
        <ImageBackground
            source={require("../../assets/bg.png")}
            style={[standardStyles.container, styles.habitsScreen]}
        >
            <Text style={styles.title}>Empieza una nueva vida con nuevos hábitos</Text>
            <HabitsContainer />
        </ImageBackground>
    )
}

export default HabitsScreen

const styles = StyleSheet.create({
    habitsScreen: {
        justifyContent: "flex-start",
        paddingTop: Constants.statusBarHeight + 16,
        width: "100%"
    },
    title: {
        color: "white",
        fontSize: 28,
        fontWeight: "200",
        textAlign: "right",
        fontStyle: "italic"
    }
})
