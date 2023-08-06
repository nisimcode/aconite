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
            <Text style={styles.text}>Game Over</Text>
            <Pressable
                style={styles.button}
                onPress={pressHandler}
            >
                <Text style={styles.text}>Start New Game</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
    },
    button: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderColor: 'blue',
        borderRadius: 10,
    }
});
