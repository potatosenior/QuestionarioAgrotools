/* 
  Tela de visualização de resposta a formulário
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
import {TextInput} from 'react-native-paper';

// dados da resposta
const MOCK_AWNSER = {
  id: '0',
  user: 'Ciclano 1',
  form_target: '1',
  created_at: '2021-01-6T03:23:03',
  awnsers: [
    {
      question_target: '0',
      awnser: 'lorem ipsum 1',
    },
    {
      question_target: '1',
      awnser: 'lorem ipsum 2',
    },
    {
      question_target: '2',
      awnser: 'lorem ipsum 3',
    },
  ],
  LAT: '-17.7510767',
  LONG: '-48.6088232,15z',
};

// dados do formulários
const MOCK_FORM = {
  id: '1',
  author: 'Fulano 2',
  title: 'Form 2',
  created_at: '2021-01-6T03:23:01',
  questions: ['Question 1', 'Question 2', 'Question 3'],
};

export default function FormAwnserScreen() {
  /**
   * Renderizar as pergunta no ScrollView
   *
   * @return {*} Retorna todos componentes
   */
  const RenderTextInputs = () => {
    return MOCK_AWNSER.awnsers.map((item, index) => {
      return (
        <View key={String(index)} style={styles.questionContainer}>
          <TextInput
            style={[styles.text, {width: '100%'}]}
            label={MOCK_FORM.questions[index]}
            value={item.awnser}
            disabled={true}
          />
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>{MOCK_FORM.title}</Text>

        <ScrollView style={{flex: 1}}>{RenderTextInputs()}</ScrollView>
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
