import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Buttons() {
  const {roundNumber} = useContext(AppContext)
  return (
    <View style={styles.container}>
      <Text>{roundNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // bottom: 0,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
})