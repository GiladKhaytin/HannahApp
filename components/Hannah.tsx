import background from "@/assets/images/background.png";
import SearchBar from '@/components/SearchBar';
import { regulationSettings } from '@/types/interface';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';

type Props = {
  data: regulationSettings[];
};

export default function Hannah({ data }: Props) {
  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.background}>
      <ScrollView>
        <SearchBar data={data} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  page: {
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
