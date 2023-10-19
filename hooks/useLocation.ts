import * as Location from "expo-location"
import { useEffect, useState } from "react"

export const useLocation = () => {
    const [currentLocation, setCurrentLocation] =
        useState<Location.LocationObject | null>(null)
    useEffect(() => {
        Location.requestForegroundPermissionsAsync().then((res) => {
            if (!res.granted) return

            Location.getCurrentPositionAsync().then((location) =>
                setCurrentLocation(location)
            )
        })
    }, [])
    return { currentLocation }
}
