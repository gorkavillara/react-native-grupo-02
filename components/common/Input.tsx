import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import React, { Dispatch, SetStateAction } from "react"
import Icon from "react-native-vector-icons/FontAwesome"

interface InputProps {
    placeholder: string
    iconName: "pencil" | "rocket" | "chevron-right"
    iconColor: string
    value: string
    changeValue: Dispatch<SetStateAction<string>>
}

const Input = ({ placeholder, iconName, iconColor, value, changeValue }: InputProps) => {
    const handleChange = (nuevoTexto: string) => {
        // console.log(nuevoTexto)
        changeValue(nuevoTexto)
    }
    return (
        <View
            style={{
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 8,
                borderColor: "#b5b5b5",
                flexDirection: "row",
                alignItems: "center",
                gap: 8
            }}
        >
            <Icon name={iconName} color={iconColor} size={18} />
            <TextInput placeholder={placeholder} value={value} onChangeText={handleChange} />
        </View>
    )
}

export default Input
