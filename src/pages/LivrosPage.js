import React from 'react';
import {StyleSheet, View, Text, FlatList } from 'react-native';
import LivroCard from '../components/LivroCard';
import series from '../../series.json';

const LivrosPage = props => (
  <View>
    <FlatList
      data={series}
      renderItem={({item }) => (
       <LivroCard livro={item}/>
      )}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  </View>
);
const styles = StyleSheet.create({

})
export default LivrosPage;