import whatsAppLogo from "@/assets/images/whatsapp-logo.png";
import React from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';

const WhatsAppLink = () => {
  const handlePress = () => {
    const url = 'https://whatsapp.com/channel/0029Vb5vAKIEquiUbKsaYv43';
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image style={styles.logo} source={whatsAppLogo} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#25D366',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default WhatsAppLink;
