import { regulationSettings } from '@/types/interface';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  data: regulationSettings[];
  onSelectTopic: (topic: string) => void;
};

const Buttons: React.FC<Props> = ({ data, onSelectTopic }) => {
  const topics = Array.from(
    new Set(data.filter(item => item.topic).map(item => item.topic!))
  );

  return (
    <View style={styles.container}>
      {topics.map((topic, index) => (
        <Pressable key={index} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => onSelectTopic(topic)}>
          <Text style={styles.topic}>{topic}</Text>
        </Pressable>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 3,
    marginVertical: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: '#8b7e8bff',
    backgroundColor: '#999399ff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonPressed: {
    backgroundColor: '#7e7580',
    transform: [{ scale: 0.97 }],
    shadowOpacity: 0.1,
  },
  topic: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Buttons;
