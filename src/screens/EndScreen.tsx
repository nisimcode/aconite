import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function EndScreen({ navigation }: StackScreenProps<any>) {
    const { signalNewGame } = useContext(AppContext);
    const pressHandler = () => {
        signalNewGame();
        navigation.navigate('StartScreen');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.gameOverText}>Game Over</Text>
            <Pressable
                style={styles.button}
                onPress={pressHandler}
            >
                <Text style={styles.newGameText}>Return to Start</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    gameOverText: {
        textAlign: 'center',
        fontSize: 60,
        color: 'red',
    },
    newGameText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'blue',
    },
    button: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderColor: 'blue',
        borderRadius: 10,
    },
});
