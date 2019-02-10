import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from './redux/action';

class Home extends Component {
  componentDidMount() {
    const { triggerDefault } = this.props;
    triggerDefault();
  }

  render() {
    const { message } = this.props;
    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  message: state.defaultReducer.message,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
