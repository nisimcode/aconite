import { StyleSheet, Text, View } from 'react-native'
import Timer from '../level2/Timer'
import Points from '../level2/Points'

export default function Feedback() {

  return (
    <View style={styles.container}>
      <Timer />
      <Points />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkorange',
    alignItems: 'center',
    justifyContent: 'center',
  },
})