import emailLogo from "@/assets/images/Email-logo.png";
import React from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';

const EmailLink = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:HannahPolice01@gmail.com');
  };

  return (
    <TouchableOpacity onPress={handleEmailPress}>
        <Image style={styles.logo} source={emailLogo} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
export default EmailLink;
