import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const I = ({ children }) => (
  <Text style={styles.style}>
    <>{children}</>
  </Text>
);

export default React.memo(I);

I.propTypes = {
  children: PropTypes.any,
};

const styles = StyleSheet.create({
  style: {
    fontStyle: 'italic',
  },
});
