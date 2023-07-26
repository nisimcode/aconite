import { useContext, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../context/AppContext';
import Colors from '../../lib/Colors';

interface CompProps {
    size: number;
    text: string;
    id: number;
    isAnswer: boolean;
    isCorrect: boolean;
}

const basePadding = 25;

export default function Rectangle({
    text,
    size,
    id,
    isAnswer,
    isCorrect,
}: CompProps) {
    const [used, setUsed] = useState(!isAnswer);
    const [cleanColors, setCleanColors] = useState(false);
    const {
        pointsRemaining,
        pointsEarned,
        timeRemaining,
        roundIsEnded,
        // newRoundHandler,
        // updatePointsEarned,
        // resetRemaining,
        deductPointsRemaining,
        roundEnder,
    } = useContext(AppContext);

    const pressHandler = () => {
        setUsed(true);
        if (isCorrect) {
            // setUsed(false);
            // updatePointsEarned(pointsRemaining);
			roundEnder(pointsRemaining);
			setUsed(false);

            // resetRemaining();
            // newRoundHandler();
        } else {
            if (!used) {
                // setUsed(true);
                deductPointsRemaining();
            }
        }
    };

    const backgroundColorPicker = () => {
        if (!isAnswer) return styles.wrapperQuestion;
        if (!used || roundIsEnded) return styles.wrapperNotUsed;
        if (isCorrect) return styles.wrapperUsedCorrect;
        return styles.wrapperUsedIncorrect;
    };

    return (
        <View style={styles.container}>
            <Pressable
                onPress={pressHandler}
                disabled={used}
                style={[
                    {
                        // backgroundColor: pressed ? 'lightyellow' : 'white',
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

    // logBox: {
    //   padding: 20,
    //   margin: 10,
    //   borderWidth: StyleSheet.hairlineWidth,
    //   borderColor: '#f0f0f0',
    //   backgroundColor: '#f9f9f9',
    // },
});
