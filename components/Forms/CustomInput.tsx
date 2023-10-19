import { StyleSheet, TextInput } from "react-native"
import React from "react"

interface ITextInput {
    value?: string
    placeholder?: string
    onChangeText?: (text: string) => void
    editable?: boolean
    secureTextEntry?: boolean
}

const CustomInput = ({ value, placeholder, onChangeText, editable = true, secureTextEntry = false }: ITextInput) => {
    return (
        <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            editable={editable}
        />
    )
}

export default CustomInput

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 32,
        width: "75%",
        color: "white"
    }
})
