import React from 'react';
import {FastField, useFormikContext} from 'formik';
import {View, Text, TextInput} from 'react-native';
import ErrorMessage from './ErrorMessage';

const AppFormFeild = ({
  width = '100%',
  label = '',
  placeholder,
  name,
  ...otherProps
}) => {
  const {setFieldValue, setFieldTouched, touched, errors, values} =
    useFormikContext();

  // const isInvalid = ;
  // console.log(errors[name]);

  return (
    <View style={{width: 320, marginVertical: 10}}>
      <FastField name={name}>
        {({field, form, meta}) => (
          <>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                color: '#000000',
              }}>
              {label ? label : placeholder}
            </Text>
            <TextInput
              style={{
                backgroundColor: '#f5f5f5',
                borderRadius: 5,
                paddingHorizontal: 15,
                fontSize: 16,
                color: '#000',
              }}
              id={name}
              onChangeText={text => form.setFieldValue(field.name, text, true)}
              value={values[field.name]}
              onBlur={() => form.setFieldTouched(field.name)}
              placeholder={placeholder}
            />

            <ErrorMessage error={meta.error} visible={meta.touched} />
          </>

          // <FormControl isInvalid={meta.touched && meta.error ? true : false}>
          //   <FormControl.Label>{label ? label : placeholder}</FormControl.Label>
          //   <Input
          //     id={name}
          //     onChangeText={text => form.setFieldValue(field.name, text)}
          //     value={values[field.name]}
          //     onBlur={() => form.setFieldTouched(field.name)}
          //     placeholder={placeholder}
          //     size="lg"
          //   />

          // </FormControl>
        )}
      </FastField>
    </View>
  );
};

export default AppFormFeild;
