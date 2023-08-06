import { StackScreenProps } from '@react-navigation/stack';
import { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Test from '../components/level3/Test';
import Feedback from '../components/level3/Feedback';
import { AppContext } from '../context/AppContext';
import { BackHandler, Alert } from 'react-native';


export default function GameScreen({ navigation }: StackScreenProps<any>) {
    const { timeOut, startTimer } = useContext(AppContext);

    const handleBackButton = () => {
        Alert.alert(
            'Start a new game?',
            '',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        navigation.navigate('StartScreen');
                    },
                },
            ],
            { cancelable: false }
        );

        // Return 'true' to prevent the default back button behavior (e.g., navigating back)
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton
            );
        };
    }, []);

    useEffect(() => {
        startTimer();
    })

    useEffect(() => {
        if (timeOut) navigation.navigate('EndScreen');
    }, [timeOut]);

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
        marginTop: 50,
        marginBottom: 20,
        marginHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
});
