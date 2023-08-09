import { StackScreenProps } from '@react-navigation/stack';
import { useContext, useEffect } from 'react';
import { Alert, BackHandler, StyleSheet, View } from 'react-native';
import Feedback from '../components/level3/Feedback';
import Test from '../components/level3/Test';
import { AppContext } from '../context/AppContext';

export default function GameScreen({ navigation }: StackScreenProps<any>) {
    const { timeOut, startTimer, noAmmo } = useContext(AppContext);

    const handleBackButton = () => {
        Alert.alert(
            'Return to Start?',
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
    });

    useEffect(() => {
        if (timeOut || noAmmo) {
            navigation.navigate('EndScreen');
        } 
    }, [timeOut, noAmmo]);

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
