import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Streak() {
    const { streak } = useContext(AppContext);
    return (
        <View>
            <Text>Streak: {streak}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
