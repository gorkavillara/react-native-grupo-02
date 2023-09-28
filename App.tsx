import AppContextProvider from "./contexts/AppContextProvider"
import PaperScreen from "./screens/PaperScreen"
import AppLayout from "./layouts/AppLayout"
import { PaperProvider } from "react-native-paper"

export default function App() {
    return (
        <PaperProvider>
            <AppContextProvider>
                <AppLayout>
                    <PaperScreen />
                </AppLayout>
            </AppContextProvider>
        </PaperProvider>
    )
}
