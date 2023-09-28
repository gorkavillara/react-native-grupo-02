import { StyleSheet, View, ImageBackground } from "react-native"
import Constants from "expo-constants"
import React, { useContext } from "react"
import { StatusBar } from "expo-status-bar"
import { AppContext } from "../contexts/AppContextProvider"

const AppLayout = ({ children }: React.PropsWithChildren) => {
    const { darkMode } = useContext(AppContext)
    return (
        <ImageBackground
            style={styles.bgImage}
            source={
                darkMode
                    ? require("../assets/bgImageDark.png")
                    : require("../assets/bgImage.png")
            }
        >
            <View style={styles.container}>
                {children}
                <StatusBar style={darkMode ? "light" : "dark"} />
            </View>
        </ImageBackground>
    )
}

export default AppLayout

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    container: {
        flex: 1
        // padding: 8
    },
    texto: { fontSize: 32, marginVertical: 16 }
})
