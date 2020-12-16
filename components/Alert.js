/* eslint-disable react-native/no-inline-styles */
import PropTypes from 'prop-types';
import React from 'react';
import { Modal, StatusBar, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Button from './Button';
import Colors from './constants/Colors';

const Alert = ({
  type = 'success',
  visible = false,
  onClose,
  title,
  message,
  children,
  onRequestClose,
  animationType = 'fade',
  onRetry,
}) => {
  let iconColor =
    type === 'success'
      ? Colors.successDark
      : type === 'warning'
      ? Colors.warning
      : type === 'danger'
      ? Colors.dangerDark
      : Colors.primaryDark;

  let iconName =
    type === 'success'
      ? 'checkcircleo'
      : type === 'warning'
      ? 'warning'
      : 'infocirlceo';
  return (
    <>
      <StatusBar
        animated={true}
        showHideTransition={true}
        backgroundColor={Colors.overlayDark}
      />
      <Modal
        animationType={animationType}
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        {children ? (
          children
        ) : (
          <>
            <View style={styles.con}>
              <View style={styles.card}>
                {/* icon */}
                <View style={styles.iconCon}>
                  {type === 'danger' ? (
                    <MaterialIcons
                      name={'error-outline'}
                      size={60}
                      color={iconColor}
                    />
                  ) : (
                    <AntDesign name={iconName} size={60} color={iconColor} />
                  )}
                </View>
                {/* text */}
                <View style={styles.textCon}>
                  <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                    {title}
                  </Text>
                  <Text style={{ textAlign: 'center' }}>{message}</Text>
                </View>
                {/* buttons */}
                {type !== 'danger' ? (
                  <View style={styles.btnCon}>
                    <View style={{ width: '80%', marginLeft: '10%' }}>
                      <Button
                        effect="bounce"
                        variant={type}
                        title="CLOSE"
                        onPress={onClose}
                      />
                    </View>
                  </View>
                ) : (
                  <View
                    style={{
                      ...styles.btnCon,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{ width: '48%' }}>
                      <Button
                        effect="bounce"
                        variant={type}
                        title="RETRY"
                        btnStyle={{
                          backgroundColor: 'white',
                          borderWidth: 1,
                          borderColor: Colors.dangerDark,
                        }}
                        textStyle={{ color: Colors.dangerDark }}
                        onPress={onRetry}
                        // btnStyle={{ backgroundColor: 'white' }}
                      />
                    </View>
                    <View style={{ width: '48%' }}>
                      <Button
                        btnStyle={{
                          borderWidth: 1,
                          borderColor: Colors.dangerDark,
                        }}
                        effect="bounce"
                        variant={type}
                        title="CLOSE"
                        onPress={onClose}
                      />
                    </View>
                  </View>
                )}
              </View>
            </View>
          </>
        )}
      </Modal>
    </>
  );
};

export default Alert;

const styles = StyleSheet.create({
  con: {
    backgroundColor: Colors.overlayDark,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 20,
  },
  iconCon: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCon: {
    width: '90%',
    marginLeft: '5%',
    alignItems: 'center',
    marginTop: 10,
  },
  btnCon: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    marginTop: 20,
  },
});

Button.propTypes = {
  type: PropTypes.oneOf(['danger', 'success', 'info']),
  visible: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  animationType: PropTypes.oneOf(['fade', 'slide']),
  onRequestClose: PropTypes.func,
  onClose: PropTypes.func,
  onRetry: PropTypes.func,
  children: PropTypes.any,
};
