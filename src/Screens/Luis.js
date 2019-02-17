import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Luis extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      a: 3,
    };
  }

  render() {
    const { a } = this.state;
    return (
      <View>
        <Text>{a}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('TCL: state', state);
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Luis);
