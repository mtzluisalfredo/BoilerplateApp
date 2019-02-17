import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import { View, Text } from 'native-base';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Container, MyForm } from '../../Components';
import { MyForm } from '../../Components';

export class Auth extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello world',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#3897FF' }}>
        <View style={{ position: 'absolute', top: 0, width: '100%', height: '35%' }}>
          <Text>{title}</Text>
        </View>
        <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white', height: '65%' }}>
          <MyForm />
        </View>
      </View>
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
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);

// import React, { Component } from 'react';
// import { Alert } from 'react-native';

// import MyForm from './Components/MyForm';

// export default class Auth extends Component {
//   render() {
//     return (
//       <MyForm
//         onSubmit={values => Alert.alert('Submitted!', JSON.stringify(values))}
//       />
//     );
//   }
// }
