/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';

import { Button } from '..';
import Alert from '../components/Alert';

const Screen1 = () => {
  const [visible, setVisible] = useState(false);
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
          // justifyContent: 'center',
          // alignItems: 'center',
          paddingTop: 100,
          paddingHorizontal: 10,
        }}>
        {/* <Container
          style={{ width: '90%' }}
          // shadow
          border={false}
          borderShape="square">
          <Text>sunny</Text>
        </Container> */}
        <Button
          // disabled
          effect="bounce"
          variant="primary"
          title="SUBMIT"
          onPress={() => {
            setVisible(true);
          }}
        />
        <Alert
          onClose={() => {
            setVisible(false);
          }}
          onRequestClose={() => {
            setVisible(false);
          }}
          onRetry={() => {}}
          visible={visible}
          type="success"
          title="success"
          message="this is success this is success this is success this is success"
        />
      </View>
    </>
  );
};

export default Screen1;
