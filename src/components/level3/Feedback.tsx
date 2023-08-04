import { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppContext } from '../../context/AppContext';
import Points from '../level2/Points';
import Round from '../level2/Round';
import Timer from '../level2/Timer';
import Streak from '../level2/Streak';

export default function Feedback() {
    return (
        <View style={styles.container}>
            <Timer />
            <Points />
            <Round />
            <Streak />
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
