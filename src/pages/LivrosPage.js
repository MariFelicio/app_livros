import React from 'react';
import {StyleSheet, 
        View, 
        FlatList,
        ActivityIndicator,
} from 'react-native';
import LivroCard from '../components/LivroCard';
import AddLivroCard from '../components/AddLivroCard';
import { connect } from 'react-redux';
import { watchLivros } from '../actions';
import {} from '@react-navigation/native'

class LivrosPage extends React.Component {
  componentDidMount(){
    this.props.watchLivros();
  }
  render() {
    const { livros, navigation } = this.props;
    if ( livros === null) {{
      return <ActivityIndicator/>;
    }} 
    return (
        <View>
          <FlatList
            data={[...livros, {isLast: true }]}
            renderItem={({item }) => (
              item.isLast 
              ? <AddLivroCard 
                onPress={() => navigation.navigate('LivroForm')} />
              : <LivroCard 
                  livro={item}
                // onPress={() => navigation.dispatch(
                   // 'LivroDetail', {livro: item })
              // }
                onPress={()=> navigation.navigate('LivroDetail', { livro: item })}
                />
              )}
          
            keyExtractor={item => item.id}
            numColumns={2}
          ListHeaderComponent = {props => (<View style={styles.marginTop} />)}
          ListFooterComponent = {props => (<View style={styles.marginBottom} />)}
    
          />
        </View>
      );
  }
}

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
  if (livros === null) {
    return { livros }
  }
  const keys = Object.keys(livros);
  const livrosWithKeys = keys.map( id => {
      return { ...livros[id], id } 
  }) 
  return { livros: livrosWithKeys };
}
export default connect (
    mapStateToProps, 
    { watchLivros }
)(LivrosPage);