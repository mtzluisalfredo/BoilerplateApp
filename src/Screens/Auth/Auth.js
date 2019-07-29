import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/Ionicons';
import { MyForm } from '../../components';
// import { MyForm } from 'components';

export class Auth extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      title: 'Bienvenido',
      subTitle: 'Inicio de sesión',
    };
  }

  render() {
    const { title, subTitle } = this.state;
    return (
      <ScrollView scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
        <MyForm title={title} subTitle={subTitle} />
      </ScrollView>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

Auth.options = () => {
  return {
    topBar: {
      visible: false,
      drawBehind: true,
      animate: false,
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
