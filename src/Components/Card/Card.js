import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Card.styles';

const Card = props => {
  const { item, index, goDetail } = props;

  return (
    <TouchableOpacity
      onPress={() => goDetail(item, index)}
      style={styles.card}
    >
      <View style={{ flex: 1, flexDirection: 'row', height: '70%' }}>
        <View style={{ width: '70%', backgroundColor: 'skyblue', paddingHorizontal: 10, paddingTop: 10 }}>
          <Text style={{ fontSize: 18 }}>Titulo</Text>
        </View>
        <View style={{ width: '30%', backgroundColor: 'powderblue', paddingTop: 10, alignItems: 'center' }}>
          <View style={{ backgroundColor: 'red', height: 80, width: 80 }}>
            <Text>A</Text>
          </View>
        </View>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', height: '30%' }}>
        <View style={{ width: '100%', backgroundColor: 'red' }} />
      </View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  goDetail: PropTypes.func,
  index: PropTypes.number,
  item: PropTypes.shape({}),
};

Card.defaultProps = {};

export default Card;
