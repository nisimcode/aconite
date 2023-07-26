import {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import Rectangle from '../level1/Rectangle';
import { AppContext } from '../../context/AppContext';

// interface CompProps {
//   options: {
//     id: number;
//     text: string;
//   }[];
//   answer: string;
// }

export default function Answers() {
  const { currentTest } = useContext(AppContext);

  return (
    <View style={styles.container}>
      {currentTest.options.map((option) => (
        <Rectangle
          key={option.id}
          id={option.id}
          text={option.text}
          size={1}
          isAnswer={true}
          isCorrect={option.text === currentTest.answer}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});
