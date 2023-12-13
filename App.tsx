import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';
import Images from "./src/constant/Images";


import AddUserScreen from './src/screens/AddUserScreen';
import UserListScreen from './src/screens/UserListScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// user list stack
const UserStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="User List" component={UserListScreen} />
    <Stack.Screen name="User Detail" component={UserDetailScreen} />
  </Stack.Navigator>
);


//add user stack
const AddUserStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Add User" component={AddUserScreen} />
  </Stack.Navigator>
);


const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, paddingBottom: 6, paddingTop: 0 },
          tabBarStyle: { height: 56 },
          headerShown: false
        }}>
        <Tab.Screen
          name="User Lists"
          component={UserStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={Images.user_list}
                resizeMode="contain"
                style={{ width: 26, height: 26, tintColor: focused ? "#3F8CFF" : "#000" }} />
            )
          }} />
        <Tab.Screen
          name="Add User"
          component={AddUserStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={Images.add_user}
                resizeMode="contain"
                style={{ width: 26, height: 26, tintColor: focused ? "#3F8CFF" : "#000" }} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
