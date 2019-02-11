import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import styled from 'styled-components/native';

const StyledButton = styled(Button)`
  margin-bottom: 15px;
`;

const ButtonComponent = ({ children, ...props }) => <StyledButton {...props}><Text>{children}</Text></StyledButton>;

ButtonComponent.defaultProps = {
  children: '',
};

ButtonComponent.propTypes = {
  children: PropTypes.string,
};

export default ButtonComponent;
