import { StyleSheet, Text, View } from "react-native"
import MapView, {
    PROVIDER_DEFAULT,
    Marker,
    PoiClickEvent,
    LatLng
} from "react-native-maps"
import React, { useState } from "react"
import { standardStyles } from "../../styles"
import { useLocation } from "../../hooks/useLocation"

const [latitude, longitude] = [52.3541099, 4.8881245]

interface IMarker {
    name: string
    description: string
    coordinate: LatLng
}

// TODO: Gestionar posición en tiempo

const MapsScreen = () => {
    const { currentLocation } = useLocation()
    console.log(currentLocation)
    const [markers, setMarkers] = useState<IMarker[]>([])
    const poiClick = (event: PoiClickEvent) => {
        console.log(event.nativeEvent)
        const { name, coordinate } = event.nativeEvent
        setMarkers((prev) => [...prev, { name, coordinate, description: name }])
    }
    return (
        <View style={standardStyles.container}>
            <MapView
                style={{ width: "100%", height: "100%" }}
                provider={PROVIDER_DEFAULT}
                onPoiClick={poiClick}
            >
                <Marker coordinate={{ latitude, longitude }} />
                {markers.map((marker, index) => (
                    <Marker
                        coordinate={marker.coordinate}
                        key={index}
                        title={marker.name}
                    />
                ))}
                {currentLocation && (
                    <Marker
                        coordinate={currentLocation.coords}
                        title="Posición actual"
                        description="Esta es la posición actual"
                        pinColor="#00f"
                    />
                )}
            </MapView>
        </View>
    )
}

export default MapsScreen

const styles = StyleSheet.create({})
