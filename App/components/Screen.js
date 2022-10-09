import {View, Text} from 'react-native';
import React from 'react';
import InputScrollView from 'react-native-input-scroll-view';

const Screen = ({children, isCenter = true}) => {
  return (
    <InputScrollView>
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
        {children}
      </View>
    </InputScrollView>
  );
};

export default Screen;
