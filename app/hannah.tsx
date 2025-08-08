import background from "@/assets/images/background.png";
import Results from '@/components/Results';
import SearchBar from '@/components/SearchBar';
import data from '@/data/dir.json';
import { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';

export default function Hannah() {
  const [query, setQuery] = useState('');
  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.background}>
        <ScrollView>
            <SearchBar query={query} setQuery={setQuery} />
            <Results query={query} data={data} />
        </ScrollView>
    </ImageBackground>
  );
};

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