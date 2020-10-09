import React from 'react';
import {ScrollView, View, StyleSheet, Image, Button} from 'react-native';
//import { connect } from 'react-redux';
import Line from '../components/Line';
import LongText from '../components/LongText';
import { connect } from 'react-redux';
import { deleteLivro} from '../actions';

class LivroDetailPage  extends React.Component {
    render() {
     const { route } = this.props;
     const { navigation } = this.props;
     const { livro } = route.params;
     
        return(
        <ScrollView>
          <Image
            style={styles.image} 
            source ={{
              uri: livro.img
            }}  />
         <Line label="Título" content={livro.title}/>
         <Line label="Gênero" content={livro.gender}/>
         <Line label="Nota" content={livro.rate}/>
         <LongText label="Descrição" content={livro.description}/>
        <View style={styles.button}>
            <Button 
                title="Editar"
                onPress={()=> {
                    navigation.replace('LivroForm', { livroToEdit: livro})
                }} />
          </View>
          <View style={styles.button}>  
          <Button 
                title="Deletar"
                color="#8B0000"
                onPress={async () => {
                    const hasDelete = await this.props.deleteLivro(livro);
                    if (hasDelete) {
                      navigation.goBack();
                    }
                }} />    
          </View>  
         
        </ScrollView>
      )
    }
  }
const styles = StyleSheet.create({
  image: {
    aspectRatio: 1
  },
  button: {
    margin: 10
  }
});
export default connect(null, { deleteLivro } )(LivroDetailPage);