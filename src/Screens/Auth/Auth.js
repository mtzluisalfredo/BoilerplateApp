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
      a: 7,
    };
  }

  render() {
    const { a } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#3897FF' }}>
        <Text>{a}</Text>
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
