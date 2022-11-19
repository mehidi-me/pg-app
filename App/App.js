import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AppContext from './AppContext';
import MainNavigator from './navigation/MainNavigator';
import 'react-native-gesture-handler';
import {I18nextProvider, useTranslation} from 'react-i18next';
import i18n from './lang/i18n.config';

export default function App() {
  const {i18n} = useTranslation();
  // getArea,
  // getHospital,
  // getMedicine,
  // getIll,

  const [area, setArea] = React.useState([]);
  const [hospital, setHospital] = React.useState([]);
  const [medicine, setMedicine] = React.useState([]);
  const [ill, setIll] = React.useState([]);
  const [department, setDepartment] = React.useState([]);

  return (
    <AppContext.Provider
      value={{
        area,
        setArea,
        hospital,
        setHospital,
        medicine,
        setMedicine,
        ill,
        setIll,
        department,
        setDepartment,
      }}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </I18nextProvider>
    </AppContext.Provider>
  );
}
