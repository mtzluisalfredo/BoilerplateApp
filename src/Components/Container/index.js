import styled from 'styled-components/native';
import is from 'styled-is';

const Container = styled.View`
  ${is('flex')`
    flex: ${props => props.flex};
  `};

  ${is('borderTop')`
    borderTopLeftRadius: ${props => props.borderTop};
    borderTopRightRadius: ${props => props.borderTop};
  `};

  ${is('absolute')`
    position: absolute
  `};

  ${is('bottom')`
    bottom: 0
  `};

  ${is('bgColor')`
    background-color: ${props => props.bgColor};
  `};

  ${is('height')`
    height: ${props => props.height};
  `};

  ${is('width')`
    width: ${props => props.width};
  `};

  ${is('center')`
    align-items: center;
    justify-content: center;
  `};

  ${is('paddingHorizontal')`
    padding-left: ${props => props.paddingHorizontal}px;
    padding-right: ${props => props.paddingHorizontal}px;
  `};

  ${is('paddingVertical')`
    padding-top: ${props => props.paddingVertical}px;
    padding-bottom: ${props => props.paddingVertical}px;
  `};

  ${is('marginHorizontal')`
    margin-left: ${props => props.marginHorizontal}px;
    margin-right: ${props => props.marginHorizontal}px;
  `};

  ${is('marginVertical')`
    margin-top: ${props => props.marginVertical}px;
    margin-bottom: ${props => props.marginVertical}px;
  `};
`;

Container.defaultProps = {
  flex: 0,
  'background-color': '#EEF1F7',
  width: '100%',
};

export default Container;
