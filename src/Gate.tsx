import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Buttons from './components/level4/Buttons';
import Game from './components/level4/Game';
import GameOver from './components/level2/GameOver';
import { AppContext } from './context/AppContext';

export default function Gate() {
    const { timeRemaining } = useContext(AppContext);
    return (
        <>
            <StatusBar style="auto" />
            <View style={styles.container}>
                {timeRemaining > 0 && <Game />}
                {timeRemaining <= 0 && <GameOver />}
                <Buttons />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 40,
        marginTop: 50,
        marginBottom: 20,
        marginHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
});
