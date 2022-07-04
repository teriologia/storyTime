import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import List from '../Screens/List';
import Detail from '../Screens/Detail';
import StoryMain from '../Screens/StoryMain';
import StoryCreator from '../Screens/StoryMain/StoryCreator';

const Navigation = ({params}) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StoryMain"
          component={StoryMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StoryCreator"
          component={StoryCreator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
