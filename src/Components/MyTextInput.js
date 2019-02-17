import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';

import styles from './MyTextInput.styles';

/**
 * to be wrapped with redux-form Field component
 */
export default function MyTextInput(props) {
  const { input, meta, ...inputProps } = props;

  // do not display warning if the field has not been touched or if it's currently being edited

  const validStyle = meta.valid ? styles.valid : styles.invalid;
  const validationStyles = meta.touched && !meta.active && validStyle;

  return (
    <View style={[styles.inputContainer, validationStyles]}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.input}
        underlineColorAndroid='transparent'
      />
    </View>
  );
}

MyTextInput.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    error: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired,
  }).isRequired,
};
