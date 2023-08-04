import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../context/AppContext';

export default function Points() {
    const { pointsTotal} = useContext(AppContext);

    // const showCurrentOrTotalPoints = () => {
    //     if (que) {
    //         return (
    //             <Text style={{ color: pointsEarned === 0 ? 'red' : 'green' }}>+ {pointsEarned} points</Text>
    //         );
    //     }
    //     return <Text>Total Points: {pointsTotal}</Text>;
    // };

    return (
        <Text>
            Total Points: {pointsTotal}
        </Text>
    );
    
}

const styles = StyleSheet.create({});
