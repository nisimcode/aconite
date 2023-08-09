import { useContext, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../context/AppContext';
import Colors from '../../lib/Colors';

interface CompProps {
    size: number;
    text: string;
    id: number;
    isAnswer: boolean;
    isCorrect: boolean;
    isOpen: boolean;
}

const basePadding = 25;

export default function Rectangle({
    text,
    size,
    isAnswer,
    isCorrect,
}: CompProps) {
    const [used, setUsed] = useState(false);
    const { timeRemaining, roundNumber, roundEnder, queSetter } =
        useContext(AppContext);

    useEffect(() => {
        setUsed(false);
        backgroundColorPicker();
    }, [roundNumber]);

    useEffect(() => {
        if (timeRemaining === 0) {
            roundEnder(false);
        }
    }, [timeRemaining]);

    const pressHandler = () => {
        setUsed(true);
        queSetter();
        setTimeout(() => roundEnder(isCorrect), 1000);
    };

    const backgroundColorPicker = () => {
        if (!isAnswer) return styles.wrapperQuestion;
        if (!used) return styles.wrapperNotUsed;
        if (isCorrect) return styles.wrapperUsedCorrect;
        return styles.wrapperUsedIncorrect;
    };

    return (
        <View style={styles.container}>
            <Pressable
                onPress={pressHandler}
                disabled={used}
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1,
                        flex: 1,
                        padding: basePadding * size,
                    },
                    backgroundColorPicker(),
                    styles.wrapper,
                ]}
            >
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    wrapper: {
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
    },

    wrapperQuestion: {
        backgroundColor: 'lightblue',
    },
    wrapperNotUsed: {
        backgroundColor: 'lightgray',
    },
    wrapperUsedCorrect: {
        backgroundColor: Colors['light-green'],
    },
    wrapperUsedIncorrect: {
        backgroundColor: Colors['light-red'],
    },
});
