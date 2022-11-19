import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import AppFormSelect from '../AppFormSelect';
import AppFormFeild from '../AppFormFeild';
import AppDatePicker from '../AppDatePicker';
import AppContext from '../../../AppContext';

const Antibiotic = ({i}) => {
  const {medicine} = useContext(AppContext);
  const [genericCompayName, setGenericCompayName] = useState({
    genericName: medicine[0]?.generic_name,
    companyName: medicine[0]?.company,
  });

  const onChangeMedicine = id => {
    let selectValue = medicine.find(v => v.id == id);
    // console.log(selectValue);
    setGenericCompayName({
      genericName: selectValue.generic_name,
      companyName: selectValue.company,
    });
  };

  // console.log(genericCompayName);
  return (
    <View>
      <AppFormSelect
        placeholder="Medicine Name"
        name={`medicine_id[${i}]`}
        rowname={`medicine_id`}
        index={i}
        items={medicine}
        onChangeMedicine={onChangeMedicine}
      />
      <AppFormFeild
        placeholder="Generic Name"
        editable={false}
        name={`generic_name[${i}]`}
        value={genericCompayName.genericName}
      />
      <AppFormFeild
        placeholder="Company Name"
        name={`company[${i}]`}
        editable={false}
        value={genericCompayName.companyName}
      />
      <AppFormFeild placeholder="mg,mcg,g" name={`unit[${i}]`} />
      <AppFormSelect
        rowname={`dose`}
        index={i}
        placeholder="Select Dose"
        name={`dose[${i}]`}
        items={[
          {name: 'Once in a day'},
          {name: 'Twice in a day'},
          {name: 'Thrice in a day'},
          {name: ': Four times in a day'},
        ]}
      />
      <AppFormFeild
        placeholder="Price of Antibiotic"
        keyboardType="number-pad"
        name={`medicine_price[${i}]`}
      />
      <AppFormSelect
        placeholder="Route Of Drug Administration"
        name={`medicine_used[${i}]`}
        rowname={`medicine_used`}
        index={i}
        items={[
          {name: 'Medicine Will Take Orally By Mouth'},
          {name: 'Medicine Will Take By Intravenous Route'},
          {name: 'Medicine Will Take By Intramuscular Route'},
          {name: 'Medicine Will Take Suvcutaneously'},
          {name: 'Medicine Will Take Topically By Skin'},
          {name: 'Others'},
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
