import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
const Main = ({children, container, style: passedStyle, center}) => {
  return (
    <View
      style={[
        styles.main,
        center ? styles.center : null,
        container ? styles.container : styles.containerFluid,
        passedStyle,
      ]}>
      {children}
    </View>
  );
};

export default Main;

Main.propTypes = {
  style: PropTypes.object,
  center: PropTypes.bool,
  container: PropTypes.bool,
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 10,
  },
  containerFluid: {
    margin: 0,
    padding: 0,
  },
});
