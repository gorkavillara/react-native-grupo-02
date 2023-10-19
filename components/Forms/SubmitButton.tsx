import {
    StyleSheet,
    Text,
    Pressable,
    ActivityIndicator,
    GestureResponderEvent
} from "react-native"
import React from "react"

interface ISubmitButton {
    text: string
    isLoading?: boolean
    onPress?: (event: GestureResponderEvent) => void
}

const SubmitButton = ({ text, onPress, isLoading = false }: ISubmitButton) => {
    return (
        <Pressable onPress={onPress} style={styles.submitButton} disabled={isLoading}>
            {isLoading ? (
                <ActivityIndicator color="black" />
            ) : (
                <Text style={{ textAlign: "center" }}>{text}</Text>
            )}
        </Pressable>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: "white",
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 32,
        width: "75%",
        color: "white"
    }
})
