import { BarCodeScanningResult, Camera, CameraType } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import { ToastAndroid, Vibration, Linking, Alert } from "react-native"
import { useEffect, useState, useRef } from "react"
import * as Sharing from "expo-sharing"

export const useCamera = () => {
    const [permission, requestPermission] = Camera.useCameraPermissions()
    const [mediaPermission, requestMediaPermission] =
        MediaLibrary.usePermissions()
    const [cameraType, setCameraType] = useState<CameraType>(CameraType.front)
    const cameraRef = useRef<Camera>(null)
    const [barCodeData, setBarCodeData] = useState<null | string>(null)

    useEffect(() => {
        console.log(permission)
        if (!permission) return
        if (!permission.canAskAgain) return

        if (!permission.granted) {
            requestPermission().then((res) => console.log(res))
        }
    }, [permission])

    useEffect(() => {
        console.log(mediaPermission)
        if (!mediaPermission) return
        if (!mediaPermission.canAskAgain) return

        if (!mediaPermission.granted) {
            requestMediaPermission().then((res) => console.log(res))
        }
    }, [mediaPermission])

    const changeCameraType = () =>
        setCameraType((prev) =>
            prev === CameraType.back ? CameraType.front : CameraType.back
        )

    const savePictureInDevice = (uri: string) => {
        MediaLibrary.saveToLibraryAsync(uri).then((res) => {
            ToastAndroid.show("✅ Foto almacenada con éxito", 300)
            console.log(res)
        })
    }

    const barCodeScanned = (scanningResult: BarCodeScanningResult) => {
        if (scanningResult.data === barCodeData) return

        console.log(scanningResult)
        setBarCodeData(scanningResult.data)
        ToastAndroid.show("👀 Código escaneado correctamente", 300)
        Vibration.vibrate(300)

        Linking.canOpenURL(scanningResult.data).then(
            (can) =>
                can &&
                Linking.openURL(scanningResult.data).catch((err) => {
                    console.log("Error al abrir la url", err)
                })
        )
    }

    const takePicture = () => {
        if (!cameraRef.current) return
        // Sacar una foto
        cameraRef.current.takePictureAsync().then((res) => {
            // Mostrar una notificación de foto tomada
            ToastAndroid.show("📷 Foto tomada con éxito", 300)
            // Obtener la foto y almacenarla en nuestra galería
            // console.log(res.uri)
            savePictureInDevice(res.uri)
            askForSharing(res.uri)
        })
    }

    const openGallery = () => {
        const intent = "content://media/internal/images/media"
        Linking.openURL(intent).catch((err) => {
            console.log("Error al abrir la galería", err)
        })
    }

    const askForSharing = (uri: string) => {
        Alert.alert("Un mensaje", "Este es el cuerpo del mensaje", [
            { text: "Compartir", onPress: () => sharePicture(uri) },
            { text: "Cancelar", onPress: () => null }
        ])
    }

    const sharePicture = (uri: string) => {
        Sharing.isAvailableAsync().then((can) => {
            if (!can) return

            Sharing.shareAsync(uri).then(console.log)
        })
    }

    return {
        permission,
        cameraType,
        changeCameraType,
        cameraRef,
        takePicture,
        barCodeScanned,
        openGallery
    }
}
