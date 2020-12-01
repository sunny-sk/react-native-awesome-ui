import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const U = ({ text }) => {
  return (
    <Text style={styles.style}>
      <>{text}</>
    </Text>
  );
};

U.propTypes = {
  text: PropTypes.string,
};

export default U;

const styles = StyleSheet.create({
  style: { textDecorationLine: 'underline' },
});

/*
component syles
*/
