import { useEffect, useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import getRandomInt from '../../lib/getRandomInt';
import Feedback from '../level3/Feedback';
import Test from '../level3/Test';
import Tests from '../../lib/Tests';
import { AppContext } from '../../context/AppContext';

export default function Card() {
  const { roundNumber, currentTest } = useContext(AppContext);
  const [started, setStarted] = useState(false);
  // const [test, setTest] = useState({
  //   id: -1,
  //   question: '',
  //   options: [
  //     { id: 0, text: '' },
  //     { id: 0, text: '' },
  //     { id: 0, text: '' },
  //     { id: 0, text: '' },
  //   ],
  //   answer: '',
  // });

  // useEffect(() => {
    // setTest({
    //   id: currentTest.id,
    //   question: currentTest.question,
    //   options: currentTest.options,
    //   answer: currentTest.answer,
    // });
    // setStarted(true);
    // console.log('test', test.id)
    // console.log('chosen', chosenTest.id);

  // }, [roundNumber])
  
  return (
      <View style={styles.container}>
          <Test  />
          <Feedback />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap : 40,
  },
});
