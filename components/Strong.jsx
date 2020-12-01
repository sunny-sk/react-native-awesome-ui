/* eslint-disable react-native/no-inline-styles */
import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

const Strong = ({ children }) => (
  <Text style={{ fontWeight: 'bold' }}>
    <>{children}</>
  </Text>
);

export default React.memo(Strong);

Strong.propTypes = {
  children: PropTypes.any,
};

/*
component syles
*/
