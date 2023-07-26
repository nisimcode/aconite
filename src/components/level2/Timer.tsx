import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Timer() {
	const { roundIsEnded, timeRemaining, pointsRemaining } = useContext(AppContext);
    const render = () => {
        if (!roundIsEnded) {
            return (
                <>
                    <Text>Time Remaining: {timeRemaining}</Text>
                    <Text>Points Remaining: {pointsRemaining}</Text>
                </>
            );
        }
        return <Text>ROUND OVER</Text>;
    };

    return <View>{render()}</View>;
}


