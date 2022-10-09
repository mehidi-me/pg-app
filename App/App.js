import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppContext from './AppContext';
import MainNavigator from './navigation/MainNavigator';
import 'react-native-gesture-handler';

export default function App() {
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
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
