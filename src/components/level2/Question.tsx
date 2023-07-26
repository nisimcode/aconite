import { StyleSheet, View } from 'react-native';
import Rectangle from '../level1/Rectangle';
import { AppContext } from '../../context/AppContext';
import {useContext} from 'react'

// interface CompProps {
//   id: number;
//   question: string;
// }

export default function Question() {
  const { currentTest } = useContext(AppContext);
  return (
    <View>
      <Rectangle
        isAnswer={false}
        isCorrect={false}
        text={currentTest.question}
        id={currentTest.id}
        size={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
