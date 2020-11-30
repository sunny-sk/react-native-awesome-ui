import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const Strong = ({children}) => (
  <Text style={{fontWeight: 'bold'}}>
    <>{children}</>
  </Text>
);

export default React.memo(Strong);

Strong.propTypes = {
  children: PropTypes.any,
};

/*
component syles
*/
