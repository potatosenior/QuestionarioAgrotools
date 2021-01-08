import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import AppContainer from './routes';

const App: () => React$Node = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
