/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';

import { Container } from '..';

const Screen1 = () => {
  useEffect(() => {
    // docs: https://github.com/faizalshap/react-native-otp-verify

    RNOtpVerify.getOtp()
      .then(() =>
        RNOtpVerify.addListener((message) => {
          try {
            if (message) {
              const otp = /(\d{4})/g.exec(message)[1];
              console.log(otp);
            }
          } catch (error) {
            console.log(error);
          }
        })
      )
      .catch((error) => {
        console.log(error);
      });

    // remove listener on unmount
    return () => {
      RNOtpVerify.removeListener();
    };
  }, []);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Container
          style={{ width: '90%' }}
          shadow
          border={false}
          borderShape="square">
          <Text>sunny</Text>
        </Container>
      </View>
    </>
  );
};

export default Screen1;