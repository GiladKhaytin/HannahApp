import Popup from '@/components/PopUp';
import { regulationSettings } from '@/types/regulationSettings';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  query: string;
  data: regulationSettings[];
};

const Results: React.FC<Props> = ({ query, data }) => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const filtered = data.filter((item) =>
    item.title?.toLowerCase().includes(query.toLowerCase()) ||
    item.description?.toLowerCase().includes(query.toLowerCase())
  );

  const handlePress = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <>
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text numberOfLines={2} ellipsizeMode="tail">
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Popup
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
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
    margin: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Results;
