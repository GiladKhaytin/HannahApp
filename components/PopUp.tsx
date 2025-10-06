import { regulationSettings } from '@/types/interface';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import RNModal from 'react-native-modal';

type Props = {
  visible: string;
  item: regulationSettings[];
};

const Popup: React.FC<Props> = ({ visible, onClose, item }) => {
  if (!item) return null;

  return (
     <RNModal isVisible={visible} animationIn="zoomIn" animationOut="zoomOut" backdropOpacity={0.4} onBackdropPress={onClose} useNativeDriver={true} style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.field}>{item.description}</Text>
          {(item.symbol || item.symbol2 || item.symbol3) && (<Text style={styles.field}>סימולים: {item.symbol} {item.symbol2} {item.symbol3}</Text>)}          
          <Text style={styles.field}>חומרת עבירה: {item.severity}</Text>
          <Text style={styles.field}>סוג: {item.type}</Text>
            {item.note && (<Text style={styles.note}>הערות: {item.note}</Text>)}
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>סגור</Text>
          </Pressable>
        </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    direction: 'rtl',
  },
  field: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 22,
  },
  note: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  closeText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default Popup;