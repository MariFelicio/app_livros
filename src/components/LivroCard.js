import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';



const LivroCard = ({ livro, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      //onPress={() => navigation.navigate('LivroDetailPages')}
      style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: livro.img
          }}
          aspectRatio={1}
          resizeMode="cover" />
        <View style={styles.cardTitleWrapper}>
          <Text style={styles.cardTitle}>{livro.title}</Text>
        </View>
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
    //borderWidth: 1,
  },
  card:{
    flex: 1,
    borderWidth: 1
  },
  cardTitleWrapper: {
      backgroundColor: 'black',
      height: 50,
      position: 'absolute',
      bottom: 0,
      opacity: 0.7, 
      width: '100%',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 3, 
      paddingRight: 3,
      alignItems: 'center'
  },
  cardTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default LivroCard;
