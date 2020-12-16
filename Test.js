/* eslint-disable no-unused-vars */
import React from 'react';
import RNOtpVerify from 'react-native-otp-verify';

import { ErrorBoundry } from '.';
import Screen1 from './screen/Screen1';

const Test = () => {
  RNOtpVerify.getHash()
    .then((hash) => {
      console.log('Use this hash to construct otp message', hash);
      console.log('A sample message -');
      console.log(`
        <#> Dear User,
        1091 is your OTP for logging into Ingo-MMT. (Remaining Time: 10 minutes and 0 seconds)
        ${hash[0]}
      `);
    })
    .catch((error) => console.log('Test.js', error));

  const onError = async (errMsg) => {
    //call Api with errMsg
  };
  return (
    <>
      <ErrorBoundry onError={onError}>
        <Screen1 />
      </ErrorBoundry>
    </>
  );
};

export default Test;
