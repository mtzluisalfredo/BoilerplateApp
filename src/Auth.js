import React, { Component } from 'react';
import { Alert } from 'react-native';

import MyForm from './Components/MyForm';

export default class Auth extends Component {
  render() {
    return (
      <MyForm
        onSubmit={values => Alert.alert('Submitted!', JSON.stringify(values))}
      />
    );
  }
}
