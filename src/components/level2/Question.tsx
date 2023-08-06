import { StyleSheet, View } from 'react-native';
import Rectangle from '../level1/Rectangle';

interface CompProps {
    id: number;
    question: string;
}

export default function Question({ id, question }: CompProps) {
    return (
        <View>
            <Rectangle
                isAnswer={false}
                isCorrect={false}
                isOpen={true}
                text={question}
                id={id}
                size={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
