import React, { Component } from 'react';
import { Text } from 'react-native';
import { Grid, Row } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ActionCreators } from './redux/action';


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
