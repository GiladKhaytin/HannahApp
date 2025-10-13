import Buttons from '@/components/Buttons';
import Results from '@/components/Results';
import { regulationSettings } from '@/types/interface';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type Props = {
  data: regulationSettings[];
};

export default function SearchBar({ data }: Props) {
  const [query, setQuery] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <FontAwesome name="search" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.searchBar}
          placeholder="איזו תקנה בא לך למצוא?"
          placeholderTextColor="#999"
          value={query}
          onChangeText={text => {
            setQuery(text);
            setSelectedTopic(null);
          }}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Buttons data={data} onSelectTopic={setSelectedTopic}/>
      </View>
      <View style={styles.resultsWrapper}>
          <Results query={query} data={data} selectedTopic={selectedTopic}/> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 40,
    width: '100%',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  resultsWrapper: {
    marginTop: 10,
  },  
  buttonsWrapper: {
    marginTop: 20,
  },
});
