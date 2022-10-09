import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabNavigator from './HomeTabNavigator';
import {Button, TouchableOpacity, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutUsScreen from '../screen/AboutUsScreen';

const Drawer = createDrawerNavigator();

// const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        options={({navigation}) => ({
          headerTitle: 'Amarousodh',
          headerLeft: () => (
            <TouchableOpacity
              onPress={navigation.openDrawer}
              style={{marginRight: 20, marginLeft: 10}}>
              <Feather name="menu" size={30} color="#000" />
            </TouchableOpacity>
          ),
        })}
        component={HomeTabNavigator}
      />
      <Drawer.Screen
        name="About"
        options={{headerTitle: 'About Us', title: 'About Us'}}
        component={AboutUsScreen}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
