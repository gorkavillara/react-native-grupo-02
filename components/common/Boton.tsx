import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import React from "react"

interface BotonProps {
    title: string
    onPress: () => void
    loading: boolean
}

const Boton = ({ title, onPress, loading }: BotonProps) => {
    const handlePress = () => {
        if (!loading) return onPress()
    }
    return (
        <TouchableOpacity
            style={{
                paddingVertical: 8,
                paddingHorizontal: 16,
                backgroundColor: "#dd22ff",
                justifyContent: "center",
                borderRadius: 8
            }}
            onPress={handlePress}
            disabled={loading}
        >
            {loading ? <ActivityIndicator color="white" /> : <Text style={{ color: "white", fontSize: 16 }}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default Boton
