import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppContext } from '../../context/AppContext';
import Answers from '../level2/Answers';
import Question from '../level2/Question';

export default function Test() {
    const { roundNumber, currentTest, testsHandler } = useContext(AppContext);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        testsHandler();
        setStarted(true);
    }, [roundNumber]);

    return (
        <View style={styles.container}>
            <Question
                question={currentTest.question}
                id={currentTest.id}
            />
            {started && (
                <Answers
                    options={currentTest.options}
                    answer={currentTest.answer}
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
