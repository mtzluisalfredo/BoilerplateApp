import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, SafeAreaView, Animated } from 'react-native';
import { connect } from 'react-redux';

import iconsApp from '../../Icons';

const { iconsMap, iconsLoaded } = iconsApp();
console.log('TCL: iconsMap, iconsLoaded', iconsMap, iconsLoaded);

export class Detail extends Component {
  constructor(props) {
    super(props);
    const { componentId } = props;
    this.state = {};

    iconsLoaded.then(() => {
      Navigation.mergeOptions(componentId, {
        topBar: {
          // rightButtons: [
          //   {
          //     id: 'closeButton',
          //     icon: iconsMap['ios-arrow-down'],
          //   },
          // ],
        },
      });
    });
  }

  componentWillMount() {
    this.scrollY = new Animated.Value(0);
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  navigationButtonPressed = ({ buttonId }) => {
    const { componentId } = this.props;

    if (buttonId === 'closeButton') {
      Navigation.dismissModal(componentId);
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f1f8' }}>
        <View style={{ flex: 1 }}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } },
            ])}
          >
            <View>
              <Text>Detail</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

Detail.options = () => {
  return {
    backButton: {
      color: '#bbb',
    },
    topBar: {
      backButton: {
        color: '#bbb',
      },
      buttonColor: '#bbb',
      elevation: 0,
      animate: true,
      drawBehind: false,
      noBorder: true,
      background: { color: '#f0f1f8' },
    },
  };
};

Detail.propTypes = {
  componentId: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
