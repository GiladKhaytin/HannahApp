import Hannah from '@/components/Hannah';
import disciplinaryRegulations from '@/data/dir.json';
import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

export default function Disciplinary() {
  const ref = React.useRef(null);

  useScrollToTop(
    React.useRef({
      scrollToTop: () => ref.current?.scrollTo({ y: 0, animated: true}),
    })
  );
    
  return (
    <View style={{ flex: 1 }}>
      <Hannah ref={ref} data={disciplinaryRegulations} />
    </View>
  );
}
