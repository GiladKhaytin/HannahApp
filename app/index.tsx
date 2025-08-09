import background from "@/assets/images/background.png";
import * as Analytics from "expo-firebase-analytics";
import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function Index() {
  useEffect(() => {
    Analytics.logEvent("home_screen_opened", {
      timestamp: new Date().toISOString(),
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
