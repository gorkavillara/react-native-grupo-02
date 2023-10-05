import { StyleSheet, Text as RNText } from "react-native"
import React from "react"

interface Props {
    variant: "h1" | "h2" | "h3" | "p"
    style: any | any[]
}

const Text = ({ variant, style }: Props) => {
    return <RNText style={[...style, styles[variant]]}>RNText</RNText>
}

export default Text

const styles = StyleSheet.create({
    h1: {
        fontSize: 36
    },
    h2: {
        fontSize: 32
    },
    h3: {
        fontSize: 24
    },
    p: {
        fontSize: 16
    }
})
