import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppContext } from '../../context/AppContext';
import shuffleArray from '../../lib/shuffleArray';
import Answers from '../level2/Answers';
import Question from '../level2/Question';


export default function Test() {
    const { roundNumber, currentTest, testUpdater } = useContext(AppContext);
    const [started, setStarted] = useState(false);
    const [optionsArray, setOptionsArray] = useState([
        {
            id: -1,
            text: '',
        },
        {
            id: -1,
            text: '',
        },
        {
            id: -1,
            text: '',
        },
        {
            id: -1,
            text: '',
        },
    ]);

    useEffect(() => {
        testUpdater();
        setStarted(true);
    }, [roundNumber]);

    return (
        <View style={styles.container}>
            <Question
                // question={currentTest.question}
                // id={currentTest.id}
            />
            {started && (
                <Answers
                    // options={optionsArray}
                    // answer={currentTest.answer}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 40,
    },
});
