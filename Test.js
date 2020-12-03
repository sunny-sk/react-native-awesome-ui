/* eslint-disable no-unused-vars */
import React from 'react';

import { ErrorBoundry } from '.';
import Screen1 from './screen/Screen1';

const Test = () => {
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
