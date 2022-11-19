import {StyleSheet, View, Button, Text, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import AppFormFeild from '../components/forms/AppFormFeild';
import * as Yup from 'yup';
import AppFormSelect from '../components/forms/AppFormSelect';
import AppFormRadio from '../components/forms/AppFormRadio';
import ImagePicker from '../components/forms/ImagePicker';
import Antibiotic from '../components/forms/Antibiotic/Antibiotic';
import AppContext from '../AppContext';
import allGetData from '../api/allGetData';
import SubmitButton from '../components/forms/SubmitButton';
import {Formik, useFormikContext} from 'formik';
import postData from '../api/postData';
import Loader from '../components/Loader';
import {useTranslation} from 'react-i18next';

const validationSchema = Yup.object().shape({
  division_id: Yup.string().required().label('Select Area'),
  distric_id: Yup.string().required().label('Hospital Name'),
  first_name: Yup.string().required().label('Patient Fist Name'),
  last_name: Yup.string().required().label('Patient Last Name'),
  phone_number: Yup.string().required().label('Patient Phone Number'),
  post_code: Yup.string().required().label('Patient Postal Code'),
  gender: Yup.string().required().label('Patient Gender'),
  age: Yup.string().required().label('Patient Age'),
  weight: Yup.string().required().label('Patient Weight'),
  height: Yup.string().required().label('Patient Height'),
  hospital_name: Yup.string().required().label('Hostpital Name'),
  department_id: Yup.string().required().label('Select Department'),
  noa: Yup.string().required().label('Number Of Antibiotics'),
  no_of_other: Yup.string().required().label('Number Of Others'),
  image: Yup.mixed().required().label('Prescripton Image'),
});

const PatientInfoScreen = () => {
  const initialValues = {
    division_id: '',
    distric_id: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    post_code: '',
    gender: '',
    age: '',
    weight: '',
    height: '',
    hospital_name: '',
    department_id: '',
    noa: '',
    no_of_other: '',
    medicine_id: '',
    generic_name: '',
    company: '',
    unit: '',
    dose: '',
    medicine_price: '',
    medicine_used: '',
    start_date: '',
    end_date: '',
    image: '',
    file: '',
    privew_image: '',
    drug_sensitive: '',
    image: '',
  };

  const [AntibioticList, setAntibioticList] = useState([1]);
  const {
    area,
    setArea,
    hospital,
    setHospital,
    medicine,
    setMedicine,
    ill,
    setIll,
    department,
  } = useContext(AppContext);
  const [anyPreviousTreatment, setanyPreviousTreatment] = useState('No');
  const [drugensitive, setDrugensitive] = useState('No');

  const [modalVisibility, setModalVisibility] = useState(false);

  const submitData = async (data, {resetForm}) => {
    setModalVisibility(true);
    console.log('submited');
    console.log(data);

    let uploadData = new FormData();
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'multipart/form-data');

    Object.keys(data).map(v => {
      uploadData.append(v, data[v]);
    });
    console.log(uploadData);

    const res = await postData.postPatientInfo({
      header: myHeaders,
      data: uploadData,
    });
    setModalVisibility(false);
    if (!res.ok) {
      Alert.alert('Error', 'Something wrong! try again..');
    } else {
      resetForm({values: initialValues});
      setAntibioticList([1]);
      setanyPreviousTreatment('No');
      setDrugensitive('No');
      Alert.alert('Success', 'data successfully submitted');
    }
    console.log(res);
  };

  const {t} = useTranslation();

  return (
    <Screen isCenter={false}>
      <Loader isLoading={modalVisibility} />
      <AppForm
        onSubmit={submitData}
        initialValues={initialValues}
        validationSchema={validationSchema}>
        <AppFormSelect
          name="division_id"
          placeholder="Select Division"
          items={area}
        />
        <AppFormSelect
          name="distric_id"
          placeholder="Select Distric"
          items={hospital}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#333',
            marginTop: 20,
          }}>
          {t('Patient Information')}
        </Text>
        <AppFormFeild name="first_name" placeholder="Patient First Name" />
        <AppFormFeild name="last_name" placeholder="Patient Last Name" />
        <AppFormFeild
          name="phone_number"
          keyboardType="number-pad"
          placeholder="Patient Phone Number"
        />
        <AppFormFeild name="post_code" placeholder="Patient Postal Code" />

        <AppFormRadio name="gender" placeholder="Select Gender" />

        <View space={2} justifyContent="center">
          <AppFormFeild
            name="age"
            keyboardType="number-pad"
            placeholder="Patient Age"
            width="32%"
          />
          <AppFormFeild
            name="weight"
            keyboardType="number-pad"
            placeholder="Patient Weight"
            width="32%"
          />
          <AppFormFeild
            name="height"
            keyboardType="number-pad"
            placeholder="Patient Height"
            width="32%"
          />
        </View>
        <AppFormFeild name="hospital_name" placeholder="Hospital Name" />
        <AppFormSelect
          items={department}
          name="department_id"
          placeholder="Select Department"
        />
        <AppFormFeild
          name="present_complaint"
          placeholder="Present Complaint"
        />

        <View space={2} justifyContent="center">
          <AppFormFeild
            name="noa"
            keyboardType="number-pad"
            placeholder="Number Of Antibiotics"
            width="49%"
          />
          <AppFormFeild
            name="no_of_other"
            keyboardType="number-pad"
            placeholder="Number Of Others Drug"
            width="49%"
          />
        </View>
        <AppFormSelect
          placeholder="Do you have any report of culture sensitivity?"
          name={`any_report`}
          items={[{name: 'No'}, {name: 'Yes'}]}
          anyPreviousTreatment={drugensitive}
          setanyPreviousTreatment={setDrugensitive}
        />
        {drugensitive == 'Yes' ? (
          <AppFormSelect
            placeholder=""
            name={`drug_sensitive`}
            items={[
              {name: 'What Were the Drug Are Sensitive'},
              {name: 'What Were the Drug Are Non Sensitive'},
            ]}
          />
        ) : (
          ''
        )}

        <AppFormSelect
          items={[{name: 'No'}, {name: 'Yes'}]}
          name="anyPreviousTreatment"
          anyPreviousTreatment={anyPreviousTreatment}
          placeholder="Any Previous Treatment History"
          setanyPreviousTreatment={setanyPreviousTreatment}
        />

        {anyPreviousTreatment == 'Yes' ? (
          <View
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#c1c1c1',
              borderRadius: 10,
            }}>
            <AppFormSelect
              items={ill}
              name="ill_id"
              placeholder="What Was The Disease ?"
            />
            <AppFormSelect
              items={[{name: 'Yes'}, {name: 'No'}]}
              name="any_antibiotic"
              placeholder="did you take any antibiotic for that disease ?"
            />
            <AppFormSelect
              items={[{name: 'Yes'}, {name: 'No'}]}
              name="present_antibiotic"
              placeholder="did you take any antibiotic for the present complain ?"
            />
            <AppFormSelect
              items={[{name: 'Yes'}, {name: 'No'}]}
              name="come_doctor_antibiotic"
              placeholder="did you take any antibiotic before came to hospital or doctor ?"
            />
            <AppFormSelect
              items={[{name: 'Yes'}, {name: 'No'}]}
              name="blood"
              placeholder="did you do any blood culture or other coulture?"
            />
            <AppFormSelect
              items={[{name: 'Yes'}, {name: 'No'}]}
              name="antibiotic_protect"
              placeholder="Did You Have Any history Of Antibiotic Resistance ?"
            />
            <ImagePicker
              placeholder="Previews Prescription Image"
              name="privew_image"
            />
          </View>
        ) : null}

        <View
          style={{
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#c1c1c1',
            marginVertical: 20,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#333',
            marginTop: 20,
          }}>
          {t('Antibiotic')}
        </Text>
        {AntibioticList?.map((id, index) => (
          <View key={index}>
            <Antibiotic i={index} />
            <Button
              title="remove"
              color="red"
              onPress={() =>
                setAntibioticList(curr => curr.filter(cid => cid != id))
              }
            />
            <View
              style={{
                width: '100%',
                borderBottomWidth: 1,
                borderColor: '#c1c1c1',
                marginVertical: 20,
              }}
            />
          </View>
        ))}
        <Button
          touchSoundDisabled={false}
          style={{justifyContent: 'right'}}
          onPress={() =>
            setAntibioticList(curr => {
              return curr.length > 0
                ? [...curr, curr.slice(-1).pop() + 1]
                : [1];
            })
          }
          title="add more antibiotic"
        />
        <View
          style={{
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#c1c1c1',
            marginVertical: 20,
          }}
        />

        <ImagePicker placeholder="Prescripton Image" name="image" />
        <ImagePicker placeholder="Others File" name="file" />
        <Text fontSize={'sm'} mt={4} textAlign="center">
          (after input all information submit below button)
        </Text>
        <SubmitButton />
      </AppForm>
    </Screen>
  );
};

export default PatientInfoScreen;

const styles = StyleSheet.create({});
