import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';


type Props = {
  query: string;
  setQuery: (text: string) => void;
};

const Searchbar: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.searchBar}
          placeholder="איזו תקנה בא לך למצוא?"
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
        />
        <FontAwesome name="search" size={20} color="#999" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 20,
    width: '100%',
    height: 60,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingRight: 10,
  },
});

export default Searchbar;
