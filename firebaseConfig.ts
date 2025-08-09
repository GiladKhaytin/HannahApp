import * as Analytics from 'expo-firebase-analytics';

export const logEvent = async (eventName: string, params?: object) => {
  try {
    await Analytics.logEvent(eventName, params);
    console.log(`Logged event: ${eventName}`, params);
  } catch (err) {
    console.error('Analytics error:', err);
  }
};
