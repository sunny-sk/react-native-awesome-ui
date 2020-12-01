/* eslint-disable react-native/no-inline-styles */
import PropTypes from 'prop-types';
import React from 'react';
import { Modal, Platform, Pressable, StatusBar, View } from 'react-native';

import Colors from '../components/constants/Colors';
import Container from './Container';
import Main from './Main';

/*
it accepts container props
*/

const Modals = ({
  children,
  style: passedStyle,
  transparent,
  isVisible,
  animation,
  onClose,
  ...props
}) => {
  const closeModal = () => onClose();
  return (
    <>
      <Modal
        onRequestClose={onClose}
        transparent={transparent}
        animationType={animation || 'fade'}
        visible={isVisible}>
        {Platform.OS === 'android' ? (
          <StatusBar backgroundColor={Colors.overlayMid} translucent={true} />
        ) : null}
        <Pressable
          android_ripple={{ color: Colors.overlayLight }}
          style={{
            flex: 1,
            // justifyContent: "center",
            paddingHorizontal: 10,
            backgroundColor: Colors.overlayMid,
          }}
          onPress={closeModal}>
          <Container
            {...props}
            style={{
              backgroundColor: Colors.white,
              height: '90%',
              marginLeft: '5%',
              marginTop: '5%',
              width: '90%',
              overflow: 'hidden',
              padding: 0,
              ...passedStyle,
            }}>
            <Pressable
              style={{
                height: '100%',
                width: '100%',
              }}
              onPress={() => {}}>
              <View style={{ height: '100%', width: '100%' }}>{children}</View>
            </Pressable>
          </Container>
        </Pressable>
      </Modal>
    </>
  );
};

export default Modals;

Main.propTypes = {
  style: PropTypes.object,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  transparent: PropTypes.bool,
  children: PropTypes.bool.isRequired,
  animation: PropTypes.oneOf(['fade', 'slide']),
};
Main.defaultProps = {
  animation: 'fade',
  isVisible: false,
  transparent: true,
};
