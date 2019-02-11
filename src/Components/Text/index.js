import { Text as BaseText, H1 as BaseH1 } from 'native-base';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import is from 'styled-is';

const P = styled(BaseText)`
  ${is('color')`
    color: ${props => props.color};
  `};
  ${is('fontSize')`
    font-size: ${props => props.fontSize};
  `};
`;

P.defaultProps = {
  color: '#808080',
  'font-size': 12,
};

P.propTypes = {
  color: PropTypes.string,
  'font-size': PropTypes.number,
};

const H1 = styled(BaseH1)`
  font-weight: bold;
  ${is('color')`
    color: ${props => props.color};
  `};
`;

H1.defaultProps = {
  color: '#808080',
};

H1.propTypes = {
  color: PropTypes.string,
};

export { P, H1 };
