import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Buttons from '../components/level4/Buttons';
import Card from '../components/level4/Game';

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Card />
                <Buttons />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        marginHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
