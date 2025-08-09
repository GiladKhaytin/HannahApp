import Hannah from '@/components/Hannah';
import disciplinaryRegulations from '@/data/dir.json';
import React from 'react';
import { View } from 'react-native';

export default function Disciplinary() {
  return (
    <View style={{ flex: 1 }}>
      <Hannah data={disciplinaryRegulations} />
    </View>
  );
}
