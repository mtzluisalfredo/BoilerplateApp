import React, { Component } from 'react';
import { Text } from 'react-native';
import { Grid, Row } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Swipeable } from 'components';
import { ActionCreators } from './redux/action';

const Cards = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
    title: 'Java Developer',
    subtitle: 'New York City',
    buttonText: 'Apply Now',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1501850305723-0bf18f354fea?w=500',
    title: 'React Native Developer',
    subtitle: 'San Francisco',
    buttonText: 'Learn More',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=500',
    title: 'Node.js Developer',
    subtitle: 'New York City',
    buttonText: 'Apply Now',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?w=500',
    title: 'Python Developer',
    subtitle: 'Los Angeles',
    buttonText: 'Learn More',
  },
];

class Home extends Component {
  componentDidMount() {
    const { triggerDefault } = this.props;
    triggerDefault();
  }

  render() {
    // const { message, count } = this.props;
    return (
      <Grid>
        <Row size={65}><Text>Luis</Text></Row>
        <Swipeable cards={Cards} />
      </Grid>
    );
  }
}


Home.propTypes = {
  // count: PropTypes.number,
  // message: PropTypes.string,
  triggerDefault: PropTypes.func,
};

Home.options = () => {
  return {
    topBar: {
      elevation: 0,
      drawBehind: false,
      background: {
        color: 'transparent',
      },

    },
  };
};
const mapStateToProps = state => {
  return {
    message: state.defaultReducer.message,
    count: state.defaultReducer.count,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
