import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const Category = props => {
  const { imageUri, name, length, index } = props;

  return (
    <View
      style={{
        height: 130,
        width: 150,
        marginLeft: 10,
        marginRight: index === length ? 10 : 0,
        borderWidth: 0.5,
        borderColor: '#dddddd',
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          source={imageUri}
          style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

Category.propTypes = {
  imageUri: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  index: PropTypes.number,
  length: PropTypes.number,
  name: PropTypes.string,
};

export default Category;
