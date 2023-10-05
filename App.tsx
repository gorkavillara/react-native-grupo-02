import { AppContextProvider } from "./contexts"
import { AppLayout } from "./layouts"
import { LoginScreen, OrientationScreen } from "./screens"

export default function App() {
    return (
        <AppContextProvider>
            <AppLayout>
                {/* <LoginScreen /> */}
                <OrientationScreen />
            </AppLayout>
        </AppContextProvider>
    )
}
