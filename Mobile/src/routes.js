import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// importar telas
import HomeScreen from './screens/HomeScreen';
import CreateFormScreen from './screens/CreateFormScreen';
import Forms from './screens/Forms';
import FormsAwnsers from './screens/FormsAwnsers';
import FormAwnser from './screens/FormAwnserView';
import FormAwnserMake from './screens/FormAwnserMake';

// inicializar navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Stack de criar formulários
 *
 * @return {*}
 */
function CreateFormStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateForm"
        component={CreateFormScreen}
        options={{
          title: 'Criar formulário',
          headerTintColor: '#4a4a4a',
          headerTitleStyle: {
            fontWeight: '100',
            alignSelf: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
}

/**
 * Stack de gerenciamento de formulários
 * - Listar formulários
 * - Responder formulários
 * - Listar respostas a um formulário
 * - Visualizar resposta a um formulários
 *
 * @return {*}
 */
function FormsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewForms"
        component={Forms}
        options={{
          title: 'Formulários',
          headerTintColor: '#4a4a4a',
          headerTitleStyle: {
            fontWeight: '100',
            alignSelf: 'center',
          },
        }}
      />

      <Stack.Screen
        name="ViewAwnsers"
        component={FormsAwnsers}
        options={{
          title: 'Respostas',
          headerTintColor: '#4a4a4a',
          headerTitleStyle: {
            fontWeight: '100',
            alignSelf: 'center',
          },
        }}
      />

      <Stack.Screen
        name="ViewAwnser"
        component={FormAwnser}
        options={{
          title: 'Resposta',
          headerTintColor: '#4a4a4a',
          headerTitleStyle: {
            fontWeight: '100',
            alignSelf: 'center',
          },
        }}
      />

      <Stack.Screen
        name="AwnserForm"
        component={FormAwnserMake}
        options={{
          title: 'Reponder formulário',
          headerTintColor: '#4a4a4a',
          headerTitleStyle: {
            fontWeight: '100',
            alignSelf: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
}

/**
 * App completo com tab navigator
 *
 * @export TabNavigator
 * @return {*}
 */
export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#13335f',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="CreateForm"
        component={CreateFormStack}
        options={{
          tabBarLabel: 'Criar Formulário',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Forms"
        component={FormsStack}
        options={{
          tabBarLabel: 'Formulários',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="form-select"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
