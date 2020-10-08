import React from 'react';
import {StyleSheet, View, Text, FlatList } from 'react-native';
import LivroCard from '../components/LivroCard';
import AddLivroCard from '../components/AddLivroCard';
import { connect } from 'react-redux';



const LivrosPage = ({ livros, navigation }) => (
  <View>
    <FlatList
      data={[...livros, {isLast: true }]}
      renderItem={({item }) => (
        item.isLast 
        ? <AddLivroCard 
          onPress={() => navigation.navigate('LivroForm')} />
        : <LivroCard 
            livro={item}
            //onNavigate={livro => props.navigation.dispatch(
             // StackActions.replace('LivroDetail', {livro})
           // )}
            onNavigate={()=> navigation.navigate('LivroDetail', { livro: item })}
          />
        )}
    
      keyExtractor={item => item.id}
      numColumns={2}
     ListHeaderComponent = {props => (<View style={styles.marginTop} />)}
     ListFooterComponent = {props => (<View style={styles.marginBottom} />)}

    />
  </View>
);
const styles = StyleSheet.create({
  marginTop: {
    marginTop: 5,
  },
  marginBottom: {
    marginBottom: 5
  }

})
const mapStateToProps = state => {  
  const { livros } = state;
  return { livros };
}
export default connect (mapStateToProps)(LivrosPage);