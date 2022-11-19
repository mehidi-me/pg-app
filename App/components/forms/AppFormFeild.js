import React, {useEffect, useState} from 'react';
import {FastField, Field, useFormikContext} from 'formik';
import {View, Text, TextInput} from 'react-native';
import ErrorMessage from './ErrorMessage';
import {useTranslation} from 'react-i18next';

const AppFormFeild = ({
  width = '100%',
  label = '',
  placeholder,
  name,
  editable = true,
  value = '',
  ...otherProps
}) => {
  const {setFieldValue, setFieldTouched, touched, errors, values} =
    useFormikContext();
  const {t} = useTranslation();
  //const [feildValue, setFeildValue] = useState('');

  useEffect(() => {
    setFieldValue(name, value);
  }, [value]);
  //console.log(feildValue);
  return (
    <View style={{width: 320, marginVertical: 10}}>
      <Field name={name}>
        {({field, form, meta}) => (
          <>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                color: '#000000',
              }}>
              {t(label ? label : placeholder)}
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
              editable={editable}
              onChangeText={text => form.setFieldValue(field.name, text, true)}
              value={value ? value : values[field.name]}
              onBlur={() => form.setFieldTouched(field.name)}
              placeholder={t(placeholder)}
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
      </Field>
    </View>
  );
};

export default AppFormFeild;
