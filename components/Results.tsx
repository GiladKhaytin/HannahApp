import Popup from '@/components/PopUp';
import { regulationSettings } from '@/types/interface';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  query: string;
  data: regulationSettings[];
  selectedTopic?: string | null;
};

const Results: React.FC<Props> = ({ query, data, selectedTopic }) => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const filtered = data.filter(item => {
    const matchesQuery =
      item.title?.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase());

    const matchesTopic = selectedTopic ? item.topic === selectedTopic : true;

    return matchesQuery && matchesTopic;
  });

  return (
    <>
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedItem(item)}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Popup
        visible={selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    direction: 'rtl',
    borderRadius: 15,
    margin: 4,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Results;
