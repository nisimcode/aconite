import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Footer from './src/components/level3/Footer';
import { AppProvider } from './src/context/AppContext';
import EndScreen from './src/screens/EndScreen';
import GameScreen from './src/screens/GameScreen';
import StartScreen from './src/screens/StartScreen';

type StackProps = {
    GameScreen: undefined;
    StartScreen: undefined;
    EndScreen: undefined;
};

const Stack = createStackNavigator<StackProps>();

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <AppProvider>
                    <Stack.Navigator
                        initialRouteName="StartScreen"
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen
                            name="StartScreen"
                            component={StartScreen}
                        />
                        <Stack.Screen
                            name="GameScreen"
                            component={GameScreen}
                        />
                        <Stack.Screen
                            name="EndScreen"
                            component={EndScreen}
                        />
                    </Stack.Navigator>
                    <Footer />
                </AppProvider>
            </NavigationContainer>
        </>
    );
}
