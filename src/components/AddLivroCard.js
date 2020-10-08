import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';

const AddLivroCard = ({ livro, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      //onPress={() => navigation.navigate('LivroDetailPages')}
      style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../resources/add.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 0.5,
    width: '50%',
    padding: 10,
    height: Dimensions.get('window').width / 2,
  },
  card:{
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default AddLivroCard;
