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
    const { message , count} = this.props;
    return (
      <View>
        <Text>{message}</Text>
        <Text>{count}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  message: state.defaultReducer.message,
  count: state.defaultReducer.count,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
