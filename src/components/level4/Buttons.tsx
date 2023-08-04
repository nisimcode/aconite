import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Buttons() {
  const {roundNumber} = useContext(AppContext)
  return (
    <View style={styles.container}>
      <Text>***Buttons***</Text>
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