import { useContext } from 'react';
import { Text, View } from 'react-native';
import { AppContext } from '../../context/AppContext';

export default function Timer() {
    const { roundIsEnded, timeRemaining} =
        useContext(AppContext);
    // const render = () => {
    //     if (!roundIsEnded) {
    //         return (
    //             <>
    //                 <Text>Time Remaining: {timeRemaining}</Text>
    //                 <Text>Points Remaining: {pointsRemaining}</Text>
    //             </>
    //         );
    //     }
    //     return <Text>ROUND OVER</Text>;
    // };

    return (
        <View>
            <Text>Time Remaining: {timeRemaining}</Text>
        </View>
    );
}
