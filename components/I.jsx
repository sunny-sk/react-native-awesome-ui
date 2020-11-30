import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const I = ({children}) => (
  <Text style={{fontStyle: 'italic'}}>
    <>{children}</>
  </Text>
);

export default React.memo(I);

I.propTypes = {
  children: PropTypes.any,
};
