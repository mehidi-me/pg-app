import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AboutUsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 15}}>
      <Text
        style={{
          fontSize: 16,
          color: '#333',
          textAlign: 'center',
          lineHeight: 23,
        }}>
        Amar Ousodh is a powerful medical app. Through this apps physician can
        detect the failure previous treatment, minimise the cost of the
        treatment and prevention of the antibiotic resistance.The International
        Network for Rational Use of Drugs (INRUD) is a network of
        multi-institutional groups that share a common vision for promoting the
        safe, effective, and cost-effective use of medicines. Rational use of
        medicines requires that "patients receive medications appropriate to
        their clinical needs, in doses that meet their own individual
        requirements, for an adequate period of time, and at the lowest cost to
        them and their community. Healthcare professional or consumers can
        instantly report about the treatment. This app contains forms of dosage,
        drug use from essential drug list, generic name of prescribe drug and
        cost of treatment. It will help the physician for rational prescribing.
      </Text>
    </View>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({});
