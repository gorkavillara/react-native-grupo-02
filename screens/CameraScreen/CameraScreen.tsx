import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Camera } from "expo-camera"
import Constants from "expo-constants"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { standardStyles } from "../../styles"
import { useCamera } from "../../hooks/useCamera"
import Icon from "react-native-vector-icons/Ionicons"

const CameraScreen = () => {
    const {
        permission,
        cameraType,
        changeCameraType,
        cameraRef,
        takePicture,
        barCodeScanned,
        openGallery
    } = useCamera()

    const navigation = useNavigation()

    if (!permission) return <Text>No hay permiso</Text>
    if (!permission.granted) return <Text>Permiso no concedido</Text>

    return (
        <View style={standardStyles.container}>
            <Camera
                ref={cameraRef}
                type={cameraType}
                style={styles.camera}
                onBarCodeScanned={barCodeScanned}
            >
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon name="arrow-back" color="white" size={24} />
                    </TouchableOpacity>
                </View>
                <View style={styles.cameraButtons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={openGallery}
                    >
                        <Icon name="albums" color="white" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bigButton}
                        onPress={takePicture}
                    >
                        <Icon name="camera" color="white" size={48} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={changeCameraType}
                    >
                        <Icon name="camera-reverse" color="white" size={24} />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({
    camera: {
        width: "100%",
        height: "100%",
        padding: 24,
        paddingTop: Constants.statusBarHeight,
        justifyContent: "space-between"
    },
    cameraButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    button: {
        height: 40,
        width: 40,
        backgroundColor: "#fff5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40
    },
    bigButton: {
        height: 80,
        width: 80,
        backgroundColor: "#fff5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40
    }
})
