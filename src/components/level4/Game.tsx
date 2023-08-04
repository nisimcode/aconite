import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppContext } from '../../context/AppContext';
import Feedback from '../level3/Feedback';
import Test from '../level3/Test';
import GameOver from '../level2/GameOver';

export default function Game() {
    return (
        <View style={styles.container}>
            <Test />
            <Feedback />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 40,
    },
});
