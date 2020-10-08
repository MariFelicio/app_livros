import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';


class LivroDetailPage  extends React.Component {
    render() {
      const { livro } = this.props.navigation.state.params;
      //const { livro } = navigation.state.params;
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
         
        </ScrollView>
      )
    }
  }
const styles = StyleSheet.create({
  image: {
    aspectRatio: 1
  }
});
export default LivroDetailPage;