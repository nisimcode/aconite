import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../context/AppContext';

export default function Points() {
  const { pointsEarned } = useContext(AppContext);

  return (
    <View>
      <Text>Points Earned: {pointsEarned}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})