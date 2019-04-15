import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Input, Button, Text, Grid, Row } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Field, reduxForm } from 'redux-form';
import { View } from 'react-native';
import { ifIphoneX } from '../helpers';

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
      <Item
        style={{
          backgroundColor: '#F5F7FB',
          marginLeft: 0,
          marginVertical: 5,
          paddingHorizontal: 5,
        }}
        error={hasError}
      >
        {/* <Label htmlFor={input.name}>{label}</Label> */}
        <Input {...inputProps} />
        {hasError && <Icon name='warning' size={20} color='#f9e154' />}
        {/* {hasError && <Text>{error}</Text>} */}
      </Item>
    );
  }

  render() {
    const { reset, title, subTitle } = this.props;

    return (
      <Grid style={{ paddingHorizontal: 20, backgroundColor: '#EEF3F8' }}>
        <Row
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          size={30}
        >
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
          <Text style={{ fontSize: 22, fontWeight: '200' }}>{subTitle}</Text>
        </Row>
        <Row style={{ flexDirection: 'column', justifyContent: 'flex-end' }} size={ifIphoneX(40, 45)}>
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
        </Row>
        <Row size={ifIphoneX(30, 25)}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
          >
            <Text style={{ width: '60%' }}>Inicio con redes sociales</Text>
            <View style={{ width: 50, borderRadius: 25, height: 50, backgroundColor: 'steelblue' }} />
            <View style={{ width: 50, borderRadius: 25, height: 50, backgroundColor: 'red' }} />
          </View>
        </Row>
      </Grid>
    );
  }
}

MyForm.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export default reduxForm({
  form: 'test',
  validate,
})(MyForm);
