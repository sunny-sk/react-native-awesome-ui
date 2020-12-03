/* eslint-disable react-native/no-inline-styles */
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from './constants/Colors';

/*

defaults
color: white,
bgColor: primary,
shadow : false,
type : default

*/

const Badge = ({
  style: passedStyle,
  shadow = false,
  color,
  bgColor,
  text,
  type = 'default',
}) => {
  return (
    <View
      style={[
        styles.badge,
        type
          ? type === 'pill'
            ? styles.pill
            : styles.default
          : styles.default,
        shadow ? styles.shadowStyle : null,
        {
          backgroundColor: bgColor || Colors.primary,
        },
        passedStyle,
      ]}>
      <Text
        style={[
          {
            color: color
              ? color
              : bgColor
              ? bgColor === Colors.warning
                ? Colors.black
                : 'white'
              : 'white',
            fontSize: 13,
            alignItems: 'center',
          },
        ]}>
        {text || 4}
      </Text>
    </View>
  );
};

export default React.memo(Badge);

Badge.propTypes = {
  style: PropTypes.object,
  shadow: PropTypes.bool,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['default', 'pill']),
};

const styles = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  default: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 14,
  },

  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});
