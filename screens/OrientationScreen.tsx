import { View, Text, Pressable, Platform } from "react-native"
import * as ScreenOrientation from "expo-screen-orientation"
import React from "react"
import { standardStyles } from "../styles"

const Componente = Platform.select({
    android: () => require("../components/PlatformComponents/AndroidComponent").default,
    ios: () => require("../components/PlatformComponents/iosComponent").default,
    default: () => require("../components/PlatformComponents/iosComponent").default
})
const ComponenteARenderizar = Componente()

const OrientationScreen = () => {
    console.log(ScreenOrientation.Orientation)

    const bloquearPortrait = () => {
        ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
        )
    }

    const desbloquearPortrait = () => {
        ScreenOrientation.unlockAsync()
    }

    console.log(ComponenteARenderizar)
    return (
        <View style={standardStyles.container}>
            {Platform.OS === "android" && <Text>Running on Android</Text>}
            <ComponenteARenderizar />
            <Text style={standardStyles.titulo}>OrientationScreen</Text>
            <Pressable onPress={bloquearPortrait}>
                <Text>Bloquear portrait</Text>
            </Pressable>
            <Pressable onPress={desbloquearPortrait}>
                <Text>Desbloquear portrait</Text>
            </Pressable>
        </View>
    )
}

export default OrientationScreen
