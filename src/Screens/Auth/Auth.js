import React, { Component } from 'react';
import { Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container } from '../../Components';

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
      <Container flex={1}>
        <Icon name='ios-rocket' size={60} color='#0a0b3b' />
        <Container
          borderTop={30}
          absolute
          bottom
          bgColor='#0a0b3b'
          height='65%'
        >
          <Text>{a}</Text>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log('TCL: state', state);
  console.log('TCL: state', state);
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
