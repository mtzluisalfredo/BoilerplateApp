import React, { Component } from 'react';
import { Item, Input, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { ScrollView } from 'react-native';

const validate = values => {
  const error = {};
  error.email = '';

  let ema = values.email;
  if (values.email === undefined) {
    ema = '';
  }

  if (ema.length < 8 && ema !== '') {
    error.email = 'too short';
  }

  if (!ema.includes('@') && ema !== '') {
    error.email = '@ not included';
  }

  return error;
};
class MyForm extends Component {
  renderInput = ({ style, label, type, input, meta: { error }, ...otherProps }) => {
    const inputProps = { ...input, ...otherProps };
    let hasError = false;

    if (error !== undefined) {
      hasError = true;
    }

    return (
      <Item style={{ backgroundColor: 'gray', marginLeft: 0, marginTop: 10 }} error={hasError}>
        {/* <Label htmlFor={input.name}>{label}</Label> */}
        <Input {...inputProps} />
        {/* {hasError && <Text>{error}</Text>} */}
      </Item>
    );
  }

  render() {
    const { reset } = this.props;
    return (
      <ScrollView style={{ padding: 10, paddingBottom: 0 }}>
        <Field
          name='email'
          label='Email'
          component={this.renderInput}
        />
        <Field
          name='password'
          label='Contraseña'
          secureTextEntry
          component={this.renderInput}
        />
        <Button block primary onPress={reset}>
          <Text>Submit</Text>
        </Button>
      </ScrollView>
    );
  }
}
export default reduxForm({
  form: 'test',
  validate,
})(MyForm);
