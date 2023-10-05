import { View, Text } from "react-native"
import { useRecoilValue } from "recoil"
import { sumaContadores } from "../../../app/contadorState"
import React from "react"

const DisplaySuma = () => {
    const suma = useRecoilValue(sumaContadores)
    console.log("Renderizada la suma de contadores")
    return (
        <View>
            <Text>Suma de contadores: {suma}</Text>
        </View>
    )
}

export default DisplaySuma
