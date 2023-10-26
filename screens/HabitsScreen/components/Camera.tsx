import { StyleSheet, Text, View } from "react-native"
import React from "react"

const Camera = () => {
    return (
        <View style={styles.cameraView}>
            <Text>Camera</Text>
        </View>
    )
}

export default Camera

const styles = StyleSheet.create({
    cameraView: {
        backgroundColor: "white"
    }
})
