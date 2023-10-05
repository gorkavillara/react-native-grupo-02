import { useState } from "react"
import { Image } from "react-native"
import { styles } from "./styles"

interface Props {
    fullImage: any
    thumbImage: any
}

const ImagePreview = ({ fullImage, thumbImage }: Props) => {
    const [showFullImage, setShowFullImage] = useState(false)
    const loadCompleted = () => {
        setTimeout(() => setShowFullImage(true), 2000)
    }

    return (
        <>
            <Image
                style={[
                    styles.image,
                    { display: showFullImage ? "flex" : "none" }
                ]}
                resizeMode="cover"
                onLoadEnd={loadCompleted}
                source={fullImage}
            />
            <Image
                style={[
                    styles.image,
                    { display: showFullImage ? "none" : "flex" }
                ]}
                resizeMode="cover"
                source={thumbImage}
            />
        </>
    )
}

export default ImagePreview
