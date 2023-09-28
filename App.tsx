import AppContextProvider from "./contexts/AppContextProvider"
import StyledScreen from "./screens/StyledScreen"
import AppLayout from "./layouts/AppLayout"

export default function App() {
    return (
        <AppContextProvider>
            <AppLayout>
                <StyledScreen />
            </AppLayout>
        </AppContextProvider>
    )
}
