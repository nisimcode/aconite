import { StyleSheet, Text, View } from 'react-native'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text>***Footer***</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})