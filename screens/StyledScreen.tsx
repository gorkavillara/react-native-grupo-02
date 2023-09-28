import { StyleSheet, Switch, Text, View } from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../contexts/AppContextProvider"

const StyledScreen = () => {
    const { darkMode, toggleDarkMode } = useContext(AppContext)
    return (
        <>
            <View style={styles.container}>
                <Text style={[styles.titulo, darkMode && styles.tituloDark]}>
                    StyledScreen
                </Text>
                <Switch value={darkMode} onChange={toggleDarkMode} />
            </View>
            {/* <View style={styles.container2}>
      <Text>StyledScreen</Text>
    </View> */}
        </>
    )
}

export default StyledScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        // backgroundColor: "red"
    },
    titulo: {
        fontSize: 24
    },
    tituloDark: {
        color: "#fdfdfd"
    },
    container2: {
        flex: 4,
        backgroundColor: "blue"
    }
})
