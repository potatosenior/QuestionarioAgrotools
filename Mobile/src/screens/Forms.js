/* 
  Tela de listagem dos formulários 
*/
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';

// dados dos formulários
const MOCK = [
  {
    id: '0',
    author: 'Fulano 1',
    title: 'Form 1',
    created_at: '2021-01-6T03:23:00',
    questions: ['Question 1', 'Question 2', 'Question 3'],
  },
  {
    id: '1',
    author: 'Fulano 2',
    title: 'Form 2',
    created_at: '2021-01-6T03:23:01',
    questions: ['Question 1', 'Question 2', 'Question 3'],
  },
];

export default function ViewFormScreen({navigation}) {
  const FormCard = ({author, title, created_at, questions}) => (
    <View style={styles.formCard}>
      <Text style={styles.formTitle}>{title}</Text>
      <Text style={styles.text}>Autor: {author}</Text>
      <Text style={styles.text}>Criado em: {created_at}</Text>
      <Text style={styles.text}>Quantidade de perguntar{questions.lenght}</Text>

      <View style={styles.buttonContainer}>
        <Button
          icon="eye"
          mode="outlined"
          style={styles.button}
          color={'#4a4a4a'}
          labelStyle={{fontSize: 11}}
          contentStyle={{flexDirection: 'row-reverse'}}
          onPress={() => navigation.navigate('ViewAwnsers')}>
          Respostas
        </Button>

        <Button
          icon="arrow-right"
          mode="outlined"
          color={'#4a4a4a'}
          labelStyle={{fontSize: 11}}
          contentStyle={{flexDirection: 'row-reverse'}}
          style={styles.button}
          onPress={() => navigation.navigate('AwnserForm')}>
          Responder
        </Button>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Gerenciamento de formulários</Text>

        <Text style={styles.text}>
          Responda ou veja as respostas de todos formulários.
        </Text>

        <View style={styles.formList}>
          <FlatList
            data={MOCK}
            renderItem={({item}) => (
              <FormCard
                title={item.title}
                author={item.author}
                created_at={item.created_at}
                questions={item.questions}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
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
  formList: {
    flex: 0,
    marginTop: 10,
    // backgroundColor: 'red',
  },
  formCard: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  title: {
    marginTop: 15,
    paddingVertical: 0,
    color: '#13335f',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
  },
  formTitle: {
    marginTop: 0,
    color: '#4a4a4a',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
  text: {
    marginVertical: 1,
    fontSize: 12,
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
    height: 30,
    alignItems: 'center',
    marginTop: 3,
  },
});
