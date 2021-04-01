import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs';

const Stack = createStackNavigator();

const MainStack = () => {
 return (
   <Stack.Navigator>
     <Stack.Screen name='Dashboard' component={MainTabs} />
   </Stack.Navigator>
 );
}

export default MainStack;