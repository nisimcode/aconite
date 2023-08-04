import { AppProvider } from './src/context/AppContext';
import Gate from './src/Gate';

export default function App() {
    return (
        <AppProvider>
            <Gate />
        </AppProvider>
    );
}
