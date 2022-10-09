import React from 'react';
import {useFormikContext} from 'formik';
import {Button, View} from 'react-native';

export default function SubmitButton({title, ...otherProps}) {
  const {handleSubmit} = useFormikContext();
  return (
    <View style={{width: 320, marginVertical: 20}}>
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
}
