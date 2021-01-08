/* 
  Tela de responder formulários
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
import {TextInput, Button, Snackbar, Portal, Dialog} from 'react-native-paper';
import GetLocation from 'react-native-get-location';

const MOCK_FORM = {
  id: '1',
  author: 'Fulano 2',
  title: 'Form 2',
  created_at: '2021-01-6T03:23:01',
  questions: ['Question 1', 'Question 2', 'Question 3'],
};

export default function FormAwnserMakeScreen() {
  const [visible, setVisible] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [user, setUser] = React.useState('');
  const [awnsers, setAwnsers] = React.useState([]);

  /**
   * Renderizar as pergunta no ScrollView
   *
   * @return {*} Retorna todos componentes
   */
  const RenderTextInputs = () => {
    return MOCK_FORM.questions.map((item, index) => {
      return (
        <View key={String(index)} style={styles.questionContainer}>
          <TextInput
            style={styles.text}
            label={item}
            value={awnsers[index]}
            onChangeText={(text) => {
              let newArray = [...awnsers];
              newArray[index] = text;
              setAwnsers(newArray);
            }}
          />
        </View>
      );
    });
  };

  // Fecha o snackBar
  const onDismissSnackBar = () => setVisible(false);

  // Fecha o dialogo
  const hideDialog = () => setDialog(false);

  /**
   *  Enviar os dados para o backend
   *
   * @return {*} http status code
   */
  const sendForm = async () => {
    const body = JSON.stringify({
      user: user,
      form_target: '1',
      awnsers: awnsers,
      lat: '123',
      long: '123',
    });

    return await fetch('http://10.0.2.2:3000/forms/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: body,
    }).then((response) => {
      return response.status;
    });
  };

  /**
   * Função previa a enviar os dados
   * faz a verificação se os dados estão corretos
   *
   * @return {*}
   */
  const onFormSend = async () => {
    // verifica se todos campos estão corretos
    if (
      user.length === 0 ||
      awnsers.length === 0 ||
      awnsers.length < MOCK_FORM.questions.length
    ) {
      return setDialog(true);
    }

    GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 60 * 1000,
    })
      .then((location) => {
        console.log('loc: ', location);

        setVisible(true);
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });

    await sendForm()
      .then((status) => {
        if (status && status === 200) return setVisible(true);
        else return alert('Algo inesperado aconteceu!');
      })
      .catch((e) => {
        return alert('Algo inesperado aconteceu!');
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>{MOCK_FORM.title}</Text>

        <ScrollView style={{flex: 1}}>
          <TextInput
            style={styles.text}
            label={'Usuário'}
            value={user}
            onChangeText={(text) => setUser(text)}
          />

          {RenderTextInputs()}

          <Button
            contentStyle={{height: 60, backgroundColor: '#90ee90'}}
            icon="plus"
            color={'#4a4a4a'}
            mode="outlined"
            onPress={onFormSend}>
            Enviar
          </Button>
        </ScrollView>
      </View>

      <Snackbar visible={visible} duration={3000} onDismiss={onDismissSnackBar}>
        Resposta enviada com sucesso
      </Snackbar>

      <Portal>
        <Dialog visible={dialog} onDismiss={hideDialog}>
          <Dialog.Title>Erro</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.text}>Você não respondeu todas perguntas!</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
    width: '100%',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
