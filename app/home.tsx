import background from "@/assets/images/background.png";
import WelcomeBlock from "@/components/WelcomeBlock";
import { ImageBackground, StyleSheet } from 'react-native';


export default function Index() {
  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.background}>
      <WelcomeBlock/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
});
