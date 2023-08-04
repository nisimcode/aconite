import { StyleSheet, Text, View } from 'react-native'

export default function GameOver() {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>Game Over</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 80, 
    color: 'red',
  }
})