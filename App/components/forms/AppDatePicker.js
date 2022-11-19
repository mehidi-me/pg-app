// React Native Date Picker – To Pick the Date using Native Calendar
// https://aboutreact.com/react-native-datepicker/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

//import DatePicker from the package we installed
import DateTimePicker from '@react-native-community/datetimepicker';

import {useFormikContext} from 'formik';
import {useTranslation} from 'react-i18next';
const AppDatePicker = ({width = '100%', label = '', placeholder, name}) => {
  const {setFieldValue} = useFormikContext();
  const {t} = useTranslation();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

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

      <TouchableOpacity onPress={() => setShow(true)}>
        <TextInput
          style={styles.datePickerStyle}
          id={name}
          value={date.toLocaleString()}
          placeholder={t(placeholder)}
          editable={false}
          // InputRightElement={}
        />
      </TouchableOpacity>

      {show ? (
        <DateTimePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          value={date}
          onChange={(event, date) => {
            setDate(date);
            setShow(false);
            setFieldValue(name, date.toLocaleString());
          }}
        />
      ) : null}
    </View>
  );
};

export default AppDatePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
