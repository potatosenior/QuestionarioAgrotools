/* 
  Tela inicial de informações e boas vindas
*/
import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bem vindo!</Text>

      <Text style={styles.subtitle}>
        Esse é o gerenciador de questionários da AgroTools.
      </Text>

      <Text style={styles.title}>Aqui você pode</Text>

      <View style={styles.column}>
        <Text style={styles.subtitle}>
          Criar formulários com muita facilidade e em poucos passos.
        </Text>

        <Image
          style={styles.image}
          source={require('../assets/homepage/2.jpg')}
        />
      </View>

      <View style={styles.column}>
        <Text style={styles.subtitle}>Responder fomulários criados.</Text>

        <Image
          style={styles.image}
          source={require('../assets/homepage/1.png')}
        />
      </View>

      <View style={styles.column}>
        <Text style={styles.subtitle}>
          E claro, visualizar as respostas desses formulários.
        </Text>

        <Image
          style={[styles.image, {marginBottom: 50}]}
          source={require('../assets/homepage/3.png')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f9f9f9',
    marginBottom: 0,
  },
  column: {
    flex: 0,
    flexDirection: 'column',
    marginVertical: 15,
  },
  title: {
    marginTop: 0,
    paddingVertical: 0,
    color: '#13335f',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    marginTop: 0,
    paddingVertical: 5,
    color: '#4a4a4a',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '400',
  },
  text: {
    marginTop: 0,
    paddingVertical: 0,
    color: '#4a4a4a',
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '300',
    width: '100%',
  },
  image: {
    alignSelf: 'center',
    width: '100%',
    height: 150,
  },
});
