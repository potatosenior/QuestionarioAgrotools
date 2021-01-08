/* 
  Tela de listagem de respostas a um formulário 
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

// dados das respostas
const MOCK = [
  {
    id: '0',
    user: 'Ciclano 1',
    form_target: '1',
    created_at: '2021-01-6T03:23:03',
    awnsers: [
      {
        question_target: '0',
        awnser: 'lorem ipsum',
      },
      {
        question_target: '1',
        awnser: 'lorem ipsum',
      },
      {
        question_target: '2',
        awnser: 'lorem ipsum',
      },
    ],
    LAT: '-17.7510767',
    LONG: '-48.6088232,15z',
  },
  {
    id: '1',
    user: 'Clicano 2',
    form_target: '1',
    created_at: '2021-01-6T03:23:01',
    awnsers: [
      {
        question_target: '0',
        awnser: 'lorem ipsum',
      },
      {
        question_target: '1',
        awnser: 'lorem ipsum',
      },
      {
        question_target: '2',
        awnser: 'lorem ipsum',
      },
    ],
    LAT: '-17.7510767',
    LONG: '48.6088232,15z',
  },
];

export default function FormAwnsersScreen({navigation}) {
  const FormCard = ({user, created_at, questions, LAT, LONG}) => (
    <View style={styles.formCard}>
      <Text style={styles.text}>Usuario: {user}</Text>
      <Text style={styles.text}>Respondido em: {created_at}</Text>
      <Text style={styles.text}>Latitude: {LAT}</Text>
      <Text style={styles.text}>Longitude: {LONG}</Text>

      <Button
        icon="eye"
        mode="outlined"
        style={styles.button}
        color={'#4a4a4a'}
        labelStyle={{fontSize: 11}}
        contentStyle={{flexDirection: 'row-reverse'}}
        onPress={() => navigation.navigate('ViewAwnser')}>
        Visualizar
      </Button>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Respostas ao formulário</Text>

        <View style={styles.formList}>
          <FlatList
            data={MOCK}
            renderItem={({item}) => (
              <FormCard
                user={item.user}
                created_at={item.created_at}
                questions={item.questions}
                LAT={item.LAT}
                LONG={item.LONG}
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
    marginTop: 5,
    alignSelf: 'flex-end',
  },
});
