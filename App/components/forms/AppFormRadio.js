import React, {useState} from 'react';
import {useFormikContext} from 'formik';
import {Text, View} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import ErrorMessage from './ErrorMessage';

const AppFormRadio = ({
  width = '100%',
  label = '',
  placeholder,
  name,
  ...otherProps
}) => {
  const {setFieldValue, setFieldTouched, touched, errors, values} =
    useFormikContext();

  const isInvalid = errors[name] && touched[name] ? true : false;
  // console.log(errors[name]);

  const [radioButtonsData, setradioButtonsData] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Male',
      value: 'Male',
    },
    {
      id: '2',
      label: 'Female',
      value: 'Female',
    },
    {
      id: '3',
      label: 'Others',
      value: 'Others',
    },
  ]);

  const onPressRedioGroup = v => {
    setradioButtonsData(v);
    const Svalue = v.filter(item => item.selected == true)[0].value;
    console.log(Svalue);
    setFieldValue(name, Svalue);
  };

  return (
    <View style={{width: 320, marginVertical: 10}}>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: 16,
          color: '#000000',
        }}>
        {label ? label : placeholder}
      </Text>
      <RadioGroup
        radioButtons={radioButtonsData}
        onPress={onPressRedioGroup}
        layout="row"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormRadio;
