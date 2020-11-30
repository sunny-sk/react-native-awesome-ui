import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  ActivityIndicator,
  StatusBar,
  Text,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../components/constants/Colors';

/*
defaults
showLoader = false
*/

const Loader = ({color, showLoader = false, text}) => {
  return (
    <>
      <Modal animationType="fade" visible={showLoader} transparent={true}>
        {Platform.OS === 'android' ? (
          <StatusBar backgroundColor={Colors.overlayLight} translucent={true} />
        ) : null}
        <View style={styles.center}>
          <View style={styles.container}>
            <View style={styles.left}>
              <ActivityIndicator size="large" color={color || Colors.primary} />
            </View>
            <View style={styles.right}>
              <Text style={styles.text}>{text || 'Please wait...'}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default React.memo(Loader);

Loader.propTypes = {
  color: PropTypes.string,
  showLoader: PropTypes.bool,
  text: PropTypes.string,
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
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
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
