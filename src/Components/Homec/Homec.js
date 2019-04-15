import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
// import StarRating from 'react-native-star-rating'

const Homec = props => {
  const { width, type, name, price } = props;

  return (
    <View
      style={{
        width: width / 2 - 30,
        height: width / 2 - 30,
        borderWidth: 0.5,
        borderColor: '#dddddd',
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
          source={{
            uri:
              'https://images.unsplash.com/photo-1505238680356-667803448bb6?w=500',
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          paddingLeft: 10,
        }}
      >
        <Text style={{ fontSize: 10, color: '#b63838' }}>{type}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 10 }}>{`${price} $`}</Text>
      </View>
    </View>
  );
};

Homec.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  width: PropTypes.number,
};

export default Homec;
