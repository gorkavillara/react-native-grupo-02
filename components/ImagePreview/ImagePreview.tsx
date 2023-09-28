import { useState } from "react"
import { Image } from "react-native"
import { styles } from "./styles"

const ImagePreview = () => {
    const [showFullImage, setShowFullImage] = useState(false)
    const loadCompleted = () => {
        setTimeout(() => setShowFullImage(true), 2000)
    }

    return (
        <>
            <Image
                style={[styles.image, { display: showFullImage ? "flex" : "none" }]}
                resizeMode="cover"
                onLoadEnd={loadCompleted}
                source={require("../../assets/developer.jpeg")}
            />
            <Image
                style={[styles.image, { display: showFullImage ? "none" : "flex" }]}
                resizeMode="cover"
                source={require("../../assets/developer_thumbnail.jpeg")}
            />
        </>
    )
}

export default ImagePreview
