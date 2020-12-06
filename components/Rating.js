import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// icons name
// start
// star-o;
// star-half;

const Rating = ({ color = '#FF8C42', value = 1.5, total = 5, size = 20 }) => {
  return (
    <>
      <View style={styles.con}>
        {new Array(total).fill('1').map((_, i) => {
          return (
            <View key={i} style={styles.icon}>
              <FontAwesome
                name={
                  i + 1 <= value
                    ? 'star'
                    : i + 1 > value && i + 1 < value + 1
                    ? 'star-half-empty'
                    : 'star-o'
                }
                color={color}
                size={size}
              />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default React.memo(Rating);

const styles = StyleSheet.create({
  con: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 1,
  },
});
Rating.propTypes = {
  value: PropTypes.number,
  total: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
};
