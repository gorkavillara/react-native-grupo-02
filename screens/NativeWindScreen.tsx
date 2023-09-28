import { StyleSheet, Switch, Text, View, Pressable } from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../contexts/AppContextProvider"
import { useColorScheme } from "nativewind"

const estilos = {
    obtenTarjetaMorada: (val: number) => `flex flex-col p-8 bg-purple-400 dark:bg-purple-200 rounded-[${val}px]`,
    ["tarjeta-morada"]: "flex flex-col p-8 bg-purple-400 dark:bg-purple-200 rounded-[24px]"
}

const NativeWindScreen = () => {
    // const { darkMode, toggleDarkMode } = useContext(AppContext)
    const { colorScheme, toggleColorScheme: toggleDarkMode } = useColorScheme()

    const darkMode = colorScheme === "dark"

    return (
        <View className="box-border flex-1 justify-center items-center gap-4">
            {/* <Text className={`text-3xl font-semibold italic ${darkMode ? "text-white" : "text-slate-900"}`}> */}
            <Text className="text-3xl font-semibold italic dark:text-blue-100">
                NativeWindScreen
            </Text>
            <View className={estilos["tarjeta-morada"]}>
                <Text className="text-2xl mt-4 text-center text-white">Título</Text>
                <Text className="text-lg mt-4 text-center">Texto</Text>
                <Pressable className="mt-4 py-4 px-8 bg-emerald-200 rounded-lg">
                    <Text>Botón</Text>
                </Pressable>
            </View>
            <Switch value={darkMode} onChange={toggleDarkMode} />
        </View>
    )
}

export default NativeWindScreen

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
