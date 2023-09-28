import { AppContextProvider } from "./contexts"
import { AppLayout } from "./layouts"
import { NativeWindScreen } from "./screens"

export default function App() {
    return (
        <AppContextProvider>
            <AppLayout>
                <NativeWindScreen />
            </AppLayout>
        </AppContextProvider>
    )
}
