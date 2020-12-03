/* eslint-disable react-native/no-inline-styles */
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from './constants/Colors';

/*
defaults
borderShape = square
*/

const Container = ({
  children,
  row,
  border,
  shadow,
  borderShape,
  style: passedStyle,
  ...props
}) => {
  return (
    <View
      {...props}
      style={[
        border ? styles.borderStyle : null,
        row ? styles.rowStyle : null,
        shadow ? styles.shadowStyle : null,
        { borderRadius: borderShape === 'rounded' ? 10 : 0 },
        { ...styles.defaultStyle, ...passedStyle },
      ]}>
      {children}
    </View>
  );
};

export default Container;

Container.propTypes = {
  style: PropTypes.object,
  border: PropTypes.bool,
  row: PropTypes.bool,
  shadow: PropTypes.bool,
  borderShape: PropTypes.oneOf(['rounded', 'square']),
};
Container.defaultProps = {
  borderShape: 'rounded',
};

/*
component syles
*/
const styles = StyleSheet.create({
  defaultStyle: {
    width: '100%',
    overflow: 'hidden',
    flexWrap: 'wrap',
    padding: 15,
    backgroundColor: Colors.white,
  },
  borderStyle: {
    borderWidth: 0.5,
    borderColor: Colors.gray,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
