import React, { Component } from 'react';
import { Item, Input, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { ScrollView, View } from 'react-native';

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
      <Item style={{ backgroundColor: '#F5F7FB', marginLeft: 0, marginVertical: 5 }} error={hasError}>
        {/* <Label htmlFor={input.name}>{label}</Label> */}
        <Input {...inputProps} />
        {/* {hasError && <Text>{error}</Text>} */}
      </Item>
    );
  }

  render() {
    const { reset } = this.props;
    return (
      <ScrollView
        contentContainerStyle={{
          height: '65%',
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingHorizontal: 20,
          justifyContent: 'center',
        }}
        scrollEnabled={false}
      >
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
        <Text style={{ paddingVertical: 30 }}>Recuperar contraseña</Text>
        <Button style={{ marginVertical: 10 }} block primary onPress={reset}>
          <Text>Submit</Text>
        </Button>
        <View style={{
          marginVertical: 50,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <Text style={{ width: '60%' }}>Inicio con redes sociales</Text>
          <View style={{ width: 50, borderRadius: 25, height: 50, backgroundColor: 'steelblue' }} />
          <View style={{ width: 50, borderRadius: 25, height: 50, backgroundColor: 'red' }} />
        </View>
      </ScrollView>
    );
  }
}
export default reduxForm({
  form: 'test',
  validate,
})(MyForm);
