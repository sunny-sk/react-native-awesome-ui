import PropTypes from 'prop-types';
import React from 'react';
import {
  ActivityIndicator,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Colors from './constants/Colors';
import Container from './Container';

/*
defaults
isLoading = false
*/

const Loader = ({
  color,
  isLoading = false,
  text,
  type = 'default',
  size = 'large',
  style: containerStyle,
  textStyle,
}) => {
  return (
    <>
      {type === 'full' ? (
        <>
          <Modal animationType="fade" visible={isLoading} transparent={true}>
            {Platform.OS === 'android' ? (
              <StatusBar
                backgroundColor={Colors.overlayLight}
                translucent={true}
              />
            ) : null}
            <View style={styles.center}>
              <Container
                shadow
                style={{ ...styles.container, ...containerStyle }}
                row
                borderShape="square">
                <View style={styles.left}>
                  <ActivityIndicator
                    size={size}
                    color={color || Colors.primary}
                  />
                </View>
                <View style={styles.right}>
                  <Text style={{ ...styles.text, ...textStyle }}>
                    {text || 'Please wait...'}
                  </Text>
                </View>
              </Container>
            </View>
          </Modal>
        </>
      ) : (
        <>
          <View>
            <ActivityIndicator size={size} color={color || Colors.primary} />
          </View>
        </>
      )}
    </>
  );
};

export default React.memo(Loader);

Loader.propTypes = {
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  type: PropTypes.oneOf(['full', 'default']),
  textStyle: PropTypes.object,
};

/*
component syles
*/
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    backgroundColor: Colors.overlayLight,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 15,
    width: '90%',
  },
  left: {
    paddingHorizontal: 10,
  },
  right: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
  },
});
