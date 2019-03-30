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
      key={`${item.title}-card`}
      onPress={() => goDetail(item, index)}
      style={styles.card}
    >
      <View style={styles.viewTopCard}>
        <View style={styles.directionTopCard}>
          <View style={styles.viewInitials}>
            <Text style={styles.textInitials}>LA</Text>
          </View>
          <View style={styles.wrapperTitles}>
            <Text style={styles.nameCompany}>Luis Alfredo Martinez</Text>
            <Text style={styles.textPrice}>$128999.00</Text>
            <Text style={styles.termDays}>Plazo de 360 dias</Text>
          </View>
        </View>
      </View>
      <View style={styles.bgProgressBar}>
        <View style={styles.colorProgressBar} />
      </View>
      <View style={styles.flexRow}>
        <View
          style={styles.itemCard}
        >
          <View
            style={styles.itemCenter}
          >
            <Text style={{ color: '#A1A1B0' }}>Oportunidad</Text>
            <Text style={[styles.textItem, { color: '#696982' }]}>
              1029
            </Text>
          </View>
        </View>
        <View style={styles.itemCard}>
          <View style={styles.itemCenter}>
            <Text style={{ color: '#A1A1B0' }}>Retorno</Text>
            <Text style={[styles.textItem, { color: '#68B01F' }]}>
              17%
            </Text>
          </View>
        </View>

        <View style={styles.itemCard}>
          <View style={styles.itemCenter}>
            <Text style={{ color: '#A1A1B0' }}>Fondeada</Text>
            <Text style={[styles.textItem, { color: '#496BD4' }]}>
              47%
            </Text>
          </View>
        </View>
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
