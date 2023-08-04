import { StyleSheet, View } from 'react-native';
import Rectangle from '../level1/Rectangle';

interface CompProps {
  options: {
    id: number;
    text: string;
  }[];
  answer: string;
}

export default function Answers({ options, answer }: CompProps) {

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Rectangle
          key={option.id}
          id={option.id}
          text={option.text}
          size={1}
          isAnswer={true}
          isCorrect={option.text === answer}
          isOpen={false}
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
