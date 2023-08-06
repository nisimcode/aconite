import { StackScreenProps } from '@react-navigation/stack';
import { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function StartScreen({ navigation }: StackScreenProps<any>) {
    const { signalNewGame } = useContext(AppContext);
    const pressHandler = () => {
        signalNewGame();
        navigation.navigate('GameScreen');
    };

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={pressHandler}
            >
                <Text style={styles.text}>Start Game</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderColor: 'blue',
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
    },
});
