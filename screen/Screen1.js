/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

import { Container } from '..';

const Screen1 = () => {
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
