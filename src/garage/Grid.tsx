import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Rectangle from '../components/level1/Rectangle';
import Data from '../lib/Data';

export default function Grid() {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={Data}
        renderItem={({ item }) => (
          <Rectangle
            id={item.id}
            name={item.name}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    numColumns: 3,
    gap: 10,
  },
});
