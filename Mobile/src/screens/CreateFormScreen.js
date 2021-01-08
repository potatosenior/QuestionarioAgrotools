/* 
  Tela de criação de formulários
*/
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';

export default function CreateFormScreen() {
  const [formTitle, setformTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [questionsTitles, setQuestionsTitles] = React.useState([]);
  const scrollViewRef = React.useRef();
  const [createdNew, setCreatedNew] = React.useState(false);

  /**
   * Adiciona uma nova questão na lista
   *
   */
  const addQuestion = () => {
    setQuestionsTitles((prev) => [...prev, '']);
    // define a variavel de nova questao criada como true
    setCreatedNew(true);
  };

  /**
   * Remove uma questão da lista
   *
   * @param {*} index
   */
  const removeQuestion = (index) => {
    let newArr = [...questionsTitles];
    newArr.splice(index, 1);
    setQuestionsTitles(newArr);
  };

  /**
   * Componente de adicionar novas perguntas
   *
   */
  const ButtonAdd = () => (
    <Button
      contentStyle={{height: 50}}
      icon="plus"
      color={'#4a4a4a'}
      mode="outlined"
      onPress={addQuestion}>
      Criar nova pergunta
    </Button>
  );

  /**
   * Renderizar as pergunta no ScrollView
   *
   * @return {*} Retorna todos componentes
   */
  const RenderTextInputs = () => {
    return questionsTitles.map((item, index) => {
      if (createdNew && index === questionsTitles.length - 1) {
        setTimeout(
          () => scrollViewRef.current.scrollToEnd({animated: true}),
          300,
        );
        setCreatedNew(false);
      }
      return (
        <View key={String(index)} style={styles.questionContainer}>
          <TextInput
            style={[styles.text, {width: '80%'}]}
            label={'Titulo da pergunta'}
            value={questionsTitles[index]}
            onChangeText={(text) => {
              let newArray = [...questionsTitles];
              newArray[index] = text;
              setQuestionsTitles(newArray);
            }}
          />

          <IconButton
            icon="delete"
            color={'red'}
            size={35}
            onPress={() => removeQuestion(index)}
          />
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Informações básicas</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.text}
            label="Titúlo"
            value={formTitle}
            onChangeText={(text) => setformTitle(text)}
          />

          <TextInput
            style={styles.text}
            label="Autor"
            value={author}
            onChangeText={(text) => setAuthor(text)}
          />
        </View>

        <Text style={styles.title}>Perguntas</Text>

        <ScrollView ref={scrollViewRef} style={{flex: 1}}>
          {RenderTextInputs()}

          <ButtonAdd />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#f9f9f9',
    marginBottom: 0,
  },
  formContainer: {
    flex: 0,
    marginTop: 10,
  },
  title: {
    marginTop: 15,
    paddingVertical: 0,
    color: '#13335f',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
  },
  text: {
    marginBottom: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
