import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'native-base';
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
      <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#3897FF' }} scrollEnabled={false}>
        <Text>{title}</Text>
        <MyForm />
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
