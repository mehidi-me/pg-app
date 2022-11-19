import React, {useState} from 'react';
import {useFormikContext} from 'formik';
import {Text, View} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import ErrorMessage from './ErrorMessage';
import {useTranslation} from 'react-i18next';

const AppFormRadio = ({
  width = '100%',
  label = '',
  placeholder,
  name,
  ...otherProps
}) => {
  const {setFieldValue, setFieldTouched, touched, errors, values} =
    useFormikContext();
  const {t} = useTranslation();
  const isInvalid = errors[name] && touched[name] ? true : false;
  // console.log(errors[name]);

  const [radioButtonsData, setradioButtonsData] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: t('Male'),
      value: 'Male',
    },
    {
      id: '2',
      label: t('Female'),
      value: 'Female',
    },
    {
      id: '3',
      label: t('Others'),
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
        {t(label ? label : placeholder)}
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
