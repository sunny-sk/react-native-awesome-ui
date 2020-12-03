import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const U = ({ children }) => {
  return (
    <Text style={styles.style}>
      <>{children}</>
    </Text>
  );
};

U.propTypes = {
  children: PropTypes.any,
};

export default React.memo(U);

const styles = StyleSheet.create({
  style: { textDecorationLine: 'underline' },
});

/*
component syles
*/
