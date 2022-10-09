import {View, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ReporterInfoScreen from '../screen/ReporterInfoScreen';
import PatientInfoScreen from '../screen/PatientInfoScreen';
import AppContext from '../AppContext';
import allGetData from '../api/allGetData';

const Tab = createMaterialTopTabNavigator();
const HomeTabNavigator = () => {
  const {
    area,
    setArea,
    hospital,
    setHospital,
    medicine,
    setMedicine,
    ill,
    department,
    setDepartment,
    setIll,
  } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const getData = async (setTerget, target) => {
    setLoading(true);
    const res = await target();
    if (res.ok) {
      setTerget(res.data);
    }

    console.log(res);
  };

  useEffect(() => {
    if (!area.length) {
      getData(setArea, allGetData.getArea);
    }
    if (!hospital.length) {
      getData(setHospital, allGetData.getHospital);
    }
    if (!medicine.length) {
      getData(setMedicine, allGetData.getMedicine);
    }
    if (!ill.length) {
      getData(setIll, allGetData.getIll);
    }
    if (!department.length) {
      getData(setDepartment, allGetData.getDepartment);
    }
    if (ill.length && medicine.length && hospital.length && area.length) {
      setLoading(false);
    }
  }, [area, hospital, medicine, ill]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading..</Text>
      </View>
    );
  }
  return (
    <Tab.Navigator screenOptions={{swipeEnabled: false, lazy: true}}>
      <Tab.Screen name="Reporter Information" component={ReporterInfoScreen} />
      <Tab.Screen name="Patient Information" component={PatientInfoScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
