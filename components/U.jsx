import React, {ReactNode} from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const U = ({children}) => {
  return (
    <Text style={{textDecorationLine: 'underline'}}>
      <>{children}</>
    </Text>
  );
};

export default React.memo(U);

U.propTypes = {
  children: PropTypes.any,
};

/*
component syles
*/
