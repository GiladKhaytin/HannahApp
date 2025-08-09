import Hannah from '@/components/Hannah';
import disciplinaryRegulations from '@/data/dir.json';
import * as Analytics from 'expo-firebase-analytics';
import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function Disciplinary() {
  useEffect(() => {
    Analytics.logEvent('disciplinary_screen_opened', {
      timestamp: new Date().toISOString(),
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Hannah data={disciplinaryRegulations} />
    </View>
  );
}