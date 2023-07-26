import Draggable from 'react-native-draggable';

import { useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

export default function Drag() {
  const { height, width } = useWindowDimensions();
  
  const size : number = 100;
  const safe: { x: number, y: number } = { x: 10, y: 60 };
  const min: { x: number, y: number } = { x: safe.x, y: safe.y };
  const max: { x: number, y: number } = { x: width - min.x, y: height + min.y };
  const [initial, setInitial] = useState<{ x: number, y: number }>({
    x: min.x,
    y: min.y,
  });


  return (
    <Draggable
      x={initial.x}
      y={initial.y}
      minX={min.x}
      minY={min.y}
      maxX={max.x}
      maxY={max.y}
      renderSize={size}
      renderColor="black"
      renderText="A"
      // isCircle
      // shouldReverse={false}
      onShortPressRelease={() => alert('touched!!')}
    />
  );
}

const styles = StyleSheet.create({});
