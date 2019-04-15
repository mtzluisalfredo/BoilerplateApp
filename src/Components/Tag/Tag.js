import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Tag = props => {
  const { name } = props;
  return (
    <View
      style={{
        minHeight: 20,
        minWidth: 40,
        padding: 5,
        backgroundColor: 'white',
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: 2,
        marginRight: 5,
      }}
    >
      <Text style={{ fontWeight: '700', fontSize: 10 }}>{name}</Text>
    </View>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
};

export default Tag;
