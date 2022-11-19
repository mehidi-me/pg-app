import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import {useFormikContext} from 'formik';
import FilePickerManager from 'react-native-file-picker';
import {useTranslation} from 'react-i18next';
import ErrorMessage from './ErrorMessage';

const ImagePicker = ({
  width = '100%',
  label = '',
  placeholder,
  name,
  ...otherProps
}) => {
  const {setFieldValue, errors, touched} = useFormikContext();
  const [FileName, setFileName] = useState(null);
  const [imgUri, setImgUri] = useState(null);
  const {t} = useTranslation();
  const chosehImage = async () => {
    if (name == 'file') {
      FilePickerManager.showFilePicker(null, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled file picker');
        } else if (response.error) {
          Alert.alert('Error', response.error);
        } else {
          console.log(response);
          const {fileName, type, uri} = response;
          setFileName(fileName);
          setFieldValue(name, {
            type,
            uri,
            name: fileName,
          });
        }
      });
    } else {
      const result = await launchImageLibrary();
      console.log(result);
      if (!result.didCancel) {
        const {fileName, type, uri} = result.assets[0];
        setImgUri(uri);
        setFieldValue(name, {
          type,
          uri,
          name: fileName,
        });
      }
    }
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
      <TouchableOpacity
        style={{
          backgroundColor: 'tomato',
          width: 200,
          paddingVertical: 10,
          marginVertical: 0,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}
        onPress={chosehImage}>
        <FontAwesome name="cloud-upload" size={22} color="#fff" />
        <Text style={{color: '#fff'}}>{t('Upload Image')}</Text>
      </TouchableOpacity>
      {FileName ? <Text>{FileName}</Text> : null}
      {imgUri ? (
        <View
          style={{
            position: 'relative',
            width: 200,
            height: 200,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
            onPress={() => {
              setImgUri(null);
              setFieldValue(name, '');
            }}>
            <FontAwesome name="close" size={22} color="#fff" />
          </TouchableOpacity>
          <Image
            source={{uri: imgUri}}
            style={{
              width: 200,
              height: 200,
            }}
            resizeMode="contain"
          />
        </View>
      ) : null}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
