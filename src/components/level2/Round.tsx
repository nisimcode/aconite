import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Round() {
  const { roundNumber } = useContext(AppContext)
  return (
    <View>
      <Text>Round: {roundNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})