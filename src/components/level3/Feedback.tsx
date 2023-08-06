import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../context/AppContext';

export default function Feedback() {
    const { timeRemaining, pointsTotal, roundNumber, streak } =
        useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text>Time Remaining: {timeRemaining}</Text>
            <Text>Total Points: {pointsTotal}</Text>
            <Text>Round: {roundNumber}</Text>
            <Text>Streak: {streak}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    neutralBackground: {
        backgroundColor: 'lightblue',
    },
    positiveBackground: {
        backgroundColor: 'lightgreen',
    },
    negativeBackground: {
        backgroundColor: 'lightred',
    },
});
