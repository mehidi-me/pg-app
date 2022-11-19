import React, {useContext, useEffect, useState, useTransition} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabNavigator from './HomeTabNavigator';
import {Button, TouchableOpacity, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutUsScreen from '../screen/AboutUsScreen';
import {Picker} from '@react-native-picker/picker';
import i18n from '../lang/i18n.config';
import AppContext from '../AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {t} from 'i18next';

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

const HeaderRight = () => {
  const [lang, setLang] = useState('bn');

  const handleClick = () => {
    if (lang == 'bn') {
      i18n.changeLanguage('en');
      AsyncStorage.setItem('@lang', 'en');
      setLang('en');
    } else {
      i18n.changeLanguage('bn');
      setLang('bn');
      AsyncStorage.setItem('@lang', 'bn');
    }
  };

  useEffect(() => {
    (async () => {
      const storeLang = await AsyncStorage.getItem('@lang');
      if (storeLang) {
        console.log(storeLang);
        i18n.changeLanguage(storeLang);
        setLang(storeLang);
      }
    })();
  }, [lang]);
  return (
    <View style={{width: 100, marginHorizontal: 15}}>
      <Button
        onPress={handleClick}
        title={lang == 'bn' ? 'English' : 'Bangla'}
      />
    </View>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        options={({navigation}) => ({
          headerTitle: 'Amar Ousodh',
          title: t('Home'),
          headerLeft: () => (
            <TouchableOpacity
              onPress={navigation.openDrawer}
              style={{marginRight: 20, marginLeft: 10}}>
              <Feather name="menu" size={30} color="#000" />
            </TouchableOpacity>
          ),
          headerRight: () => <HeaderRight />,
        })}
        component={HomeTabNavigator}
      />
      <Drawer.Screen
        name="About"
        options={{headerTitle: 'About Us', title: t('About Us')}}
        component={AboutUsScreen}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
