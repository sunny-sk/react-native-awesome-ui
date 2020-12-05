/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// loaderType = none|inside|only
import { VARIANTS } from '../components/constants/Constants';
import Colors from './constants/Colors';
const { PRIMARY, DANGER, SUCCESS, DARK } = VARIANTS;
const Button = ({
  variant = PRIMARY,
  title,
  onPress,
  btnStyle,
  loaderType = 'none',
  textStyle,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <Animated.View
        style={[
          { ...styles.btnCon },
          { opacity: disabled ? 0.8 : 1 },
          { ...btnStyle },
          variant === PRIMARY && { ...styles.primary },
          variant === DANGER && { ...styles.danger },
          variant === DARK && { ...styles.dark },
          variant === SUCCESS && { ...styles.success },
          ,
        ]}>
        {loaderType === 'only' && (
          <View style={[{ ...styles.none }]}>
            {isLoading && <ActivityIndicator size="small" color="white" />}
          </View>
        )}
        {loaderType === 'none' && (
          <View style={[{ ...styles.only }]}>
            <Text
              style={[
                {
                  ...styles.txtStyle,
                  ...textStyle,
                },
                variant === PRIMARY && { ...styles.white },
                variant === DANGER && { ...styles.white },
                variant === DARK && { ...styles.white },
                variant === SUCCESS && { ...styles.white },
              ]}>
              {title || 'Click'}
            </Text>
          </View>
        )}
        {loaderType === 'inside' && (
          <>
            <View style={[{ ...styles.insideLeft }]}>
              {isLoading && <ActivityIndicator size="small" color="white" />}
            </View>
            <View style={[{ ...styles.insideRight }]}>
              <Text
                style={{
                  ...styles.txtStyle,
                  ...textStyle,
                }}>
                {title || 'Click'}
              </Text>
            </View>
          </>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnCon: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle: {
    color: 'white',
    textAlign: 'center',
  },
  none: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  only: {
    width: '100%',
    alignItems: 'center',
  },
  insideLeft: {
    width: '50%',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  insideRight: {
    width: '50%',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  white: {
    color: Colors.white,
  },
  black: {
    color: Colors.black,
  },
  primary: {
    backgroundColor: Colors.primaryDark,
  },

  success: {
    backgroundColor: Colors.success,
  },
  dark: {
    backgroundColor: Colors.dark,
  },
  danger: {
    backgroundColor: Colors.dangerDark,
  },
});
