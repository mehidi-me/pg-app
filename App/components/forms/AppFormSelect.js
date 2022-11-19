import React, {useEffect, useState} from 'react';
import {useFormikContext} from 'formik';

import AppContext from '../../AppContext';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ErrorMessage from './ErrorMessage';
import {useTranslation} from 'react-i18next';

const AppFormSelect = ({
  width = '100%',
  label = '',
  placeholder,
  name,
  rowname,
  items = [],
  setanyPreviousTreatment,
  anyPreviousTreatment,
  onChangeMedicine,
  index = 0,
  ...otherProps
}) => {
  const {setFieldValue, setFieldTouched, touched, errors, values} =
    useFormikContext();
  const {t} = useTranslation();
  // if (rowname == 'medicine_id' || rowname == 'medicine_used') {
  //   console.log(values[rowname][index]);
  // }
  useEffect(() => {
    setFieldValue(name, items[0]?.id ? items[0]?.id : items[0]?.name);
  }, [items]);
  const isInvalid = touched[name] && errors[name] ? true : false;

  const selectOnValueChange = text => {
    if (name == 'anyPreviousTreatment' || name == 'any_report')
      setanyPreviousTreatment(text);
    if (name.includes('medicine_id')) onChangeMedicine(text);
    setFieldValue(name, text);
    //console.log(text);
  };
  // console.log(name);
  return (
    // <Box alignItems="center" py={1}>
    //   <FormControl isInvalid={isInvalid} w={width}>
    //     <FormControl.Label>{label ? label : placeholder}</FormControl.Label>
    //     {/* <Input
    //       size="lg"
    //       onChangeText={(text) => setFieldValue(name, text)}
    //       value={values[name]}
    //       onBlur={() => setFieldTouched(name)}
    //       placeholder={placeholder}
    //       {...otherProps}
    //     /> */}
    //     <Select
    //       size="lg"
    //       onValueChange={text => setFieldValue(name, text)}
    //       value={values[name]}
    //       onBlur={() => setFieldTouched(name)}
    //       {...otherProps}
    //       accessibilityLabel={label ? label : placeholder}
    //       placeholder={
    //         items.length ? (label ? label : placeholder) : 'Loading...'
    //       }
    //       _selectedItem={{
    //         bg: 'teal.600',
    //         endIcon: <CheckIcon size={5} />,
    //       }}>
    //       {items?.map((item, key) => (
    //         <Select.Item label={item.name} value={item.name} key={key} />
    //       ))}
    //     </Select>
    //     {isInvalid ? (
    //       <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
    //         {errors[name]}
    //       </FormControl.ErrorMessage>
    //     ) : null}
    //   </FormControl>
    // </Box>
    <View style={{width: 320, marginVertical: 10}}>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: 16,
          color: '#000000',
        }}>
        {t(label ? label : placeholder)}
      </Text>
      <View
        style={{
          borderRadius: 10,
          paddingHorizontal: 0,
          fontSize: 16,
          borderWidth: 1,
          borderColor: '#000000',
          backgroundColor: '#f5f5f5',
          height: 50,
          justifyContent: 'center',
        }}>
        <Picker
          selectedValue={
            name == 'anyPreviousTreatment'
              ? anyPreviousTreatment
              : rowname == 'medicine_id' || rowname == 'medicine_used'
              ? values[rowname]
                ? values[rowname][index]
                : values[name]
              : values[name]
          }
          onValueChange={text => selectOnValueChange(text)}
          //mode="dropdown"
          // itemStyle={{color: 'red'}}
          prompt={placeholder}>
          {items.map((v, key) => (
            <Picker.Item
              label={v.name}
              value={v.id ? v.id : v.name}
              key={key}
              color="#333"
            />
          ))}
        </Picker>
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormSelect;
