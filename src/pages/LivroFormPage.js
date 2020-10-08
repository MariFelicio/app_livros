import React from 'react';
import {StyleSheet, 
        View, 
        Text, 
        TextInput, 
        Picker, 
        Slider, 
        Button, 
        ScrollView, 
        KeyboardAvoidingView,
        ActivityIndicator,
        Alert,
} from 'react-native';
import { connect } from 'react-redux';
import FormRow from '../components/FormRow';
import {setField, saveLivro} from '../actions';

class LivroFormPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
    }
  }
  render (){
    const {
      livroForm, 
      setField, 
      saveLivro, 
      navigation
    } = this.props;
    return  (
        <KeyboardAvoidingView 
          keyboardVerticalOffset={150}
          behavior="padding" 
          enabled>
          <ScrollView>
    
          <FormRow first>
            <TextInput
              style={styles.input}
              placeholder="Titulo"
              value={livroForm.title}
              onChangeText={value => setField('title', value)}
            />
          </FormRow>
    
          <FormRow>
            <TextInput
              style={styles.input}
              placeholder="URL da imagem"
              value={livroForm.img}
              onChangeText={value => setField('img', value)}
            />
          </FormRow>
    
          <FormRow>
            <Picker
                selectedValue={livroForm.gender}
                onValueChange={itemValue => setField('gender', itemValue )}>
                <Picker.Item label="Ficção" value="Ficção" />
                <Picker.Item label="Personagens reais" value="Personagens reais" />
                <Picker.Item label="Fantasia" value="Fantasia" />
                <Picker.Item label="Romance" value="Romance" />
              </Picker>
            </FormRow>
    
            <FormRow>
              <View style={styles.sameRow}>
                <Text>Nota: </Text>
                <Text>{livroForm.rate}</Text>
              </View>
              <Slider 
                onValueChange={value => setField('rate', value )}
                value={livroForm.rate}
                minimumValue={0}
                maximumValue={100}
                step={5}
              />
            </FormRow>
    
            <FormRow>
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={livroForm.description}
              onChangeText={value => setField('description', value)}
              numberOfLines={4}
              multiline={true}         
            />
          </FormRow>
        {
          this.state.isLoading 
            ? <ActivityIndicator />
            : <Button 
               title="Salvar"
               onPress={async () => {
                  this.setState({isLoading: true}); 
                    try {
                        await saveLivro(livroForm);
                        navigation.goBack();           
                    } catch (error) {
                        Alert.alert('Erro', error.message);
                    } finally {
                  this.setState({isLoading: false});       
                  } 
                  
                  }} /> 
        }
            
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
 
const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  sameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  }
});
function mapStateToProps(state){
  return {
    livroForm: state.livroForm  
  }
}
const matpDispatchToProps = {
  setField,
  saveLivro
}
export default connect(mapStateToProps, matpDispatchToProps) (LivroFormPage);