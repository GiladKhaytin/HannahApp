import Hannah from '@/components/Hannah';
import trafficRegulations from '@/data/traffic.json';
import { useFocusEffect } from '@react-navigation/native';
import * as Analytics from 'expo-firebase-analytics';
import React from 'react';
import { View } from 'react-native';

export default function Traffic() {
  useFocusEffect(
    React.useCallback(() => {
      Analytics.logEvent('traffic_screen_opened', {
        timestamp: new Date().toISOString(),
      });
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      <Hannah data={trafficRegulations} />
    </View>
  );
}