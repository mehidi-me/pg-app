import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import AppFormSelect from '../AppFormSelect';
import AppFormFeild from '../AppFormFeild';
import AppDatePicker from '../AppDatePicker';
import AppContext from '../../../AppContext';

const Antibiotic = ({i}) => {
  const {medicine} = useContext(AppContext);
  return (
    <View>
      <AppFormSelect
        placeholder="==Medicine Name=="
        name={`medicine_id[${i}]`}
        rowname={`medicine_id`}
        index={i}
        items={medicine}
      />
      <AppFormFeild placeholder="Generic Name" name={`generic_name[${i}]`} />
      <AppFormFeild placeholder="Company Name" name={`company[${i}]`} />
      <AppFormFeild placeholder="mg,mcg,g" name={`unit[${i}]`} />
      <AppFormFeild placeholder="Select Dose" name={`dose[${i}]`} />
      <AppFormFeild
        placeholder="Price of Antibiotic"
        keyboardType="number-pad"
        name={`medicine_price[${i}]`}
      />
      <AppFormSelect
        placeholder="Drug Administation Used"
        name={`medicine_used[${i}]`}
        rowname={`medicine_used`}
        index={i}
        items={[
          {name: 'Day one'},
          {name: 'Day two'},
          {name: 'Day three'},
          {name: 'Day four'},
        ]}
      />
      <AppDatePicker
        placeholder="Drug Therapy Start Date"
        name={`start_date[${i}]`}
      />
      <AppDatePicker
        placeholder="Drug Therapy End Date"
        name={`end_date[${i}]`}
      />
    </View>
  );
};

export default Antibiotic;

const styles = StyleSheet.create({});
