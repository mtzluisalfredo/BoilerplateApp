import React, { Component } from 'react';
import {
  Text,
  StatusBar,
  View,
  ScrollView,
  SafeAreaView,
  Animated,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ActionCreators } from './redux/action';
import { Card } from './components';


const Cards = [
  {
    imageUrl:
    'http://myzeroone.com/myzeroone/17480-business-meeting-wallpaper_24606.jpg',
    title: 'Java Developer',
    subtitle: 'New York City',
    buttonText: 'Apply Now',
  },
  {
    imageUrl:
      'http://www.capcom3c.com/assets/img/slide2.jpg',
    title: 'React Native Developer',
    subtitle: 'San Francisco',
    buttonText: 'Learn More',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Node.js Developer',
    subtitle: 'New York City',
    buttonText: 'Apply Now',
  },
  {
    imageUrl:
      'https://www.gdpm.co.uk/images/products_gallery_images/12_Meeting_room.jpg',
    title: 'Python Developer',
    subtitle: 'Los Angeles',
    buttonText: 'Learn More',
  },
];

class Home extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp',
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: 'clamp',
    });
    this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [50, 30],
      extrapolate: 'clamp',
    });
  }

  componentDidMount() {
    const { triggerDefault } = this.props;
    triggerDefault();
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
    // Not mandatory
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  navigationButtonPressed = ({ buttonId }) => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'Filters',
            passProps: {
              text: 'stack with one child',
              buttonId,
            },
          },
        }],
      },
    });
  }

  goDetail = (item, index) => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: 'Detail',
        passProps: {
          item,
          index,
        },
      },
    });
  }

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
            <View style={{ flex: 1, marginBottom: 20 }}>
              {/* <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 10,
                }}
              >
                Nuevas
              </Text> */}

              {/* <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {Cards.map((item, index) => (
                    <Category
                      key={`${item.title}-Category`}
                      imageUri={{
                        uri: item.imageUrl,
                      }}
                      name={item.title}
                      length={cardsLength}
                      index={index}
                    />
                  ))}
                </ScrollView>
              </View> */}
              <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Oportunides para invertir
                </Text>
                {Cards.map((item, index) => (
                  <Card key={`${index.toString()}`} item={item} index={index} goDetail={() => this.goDetail()} />
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  componentId: PropTypes.string,
  triggerDefault: PropTypes.func,
};

Home.defaultProps = {};

Home.options = () => {
  return {
    layout: {
      backgroundColor: '#f0f1f8',
    },
    topBar: {
      elevation: 0,
      drawBehind: false,
      noBorder: true,
      background: { color: '#f0f1f8' },
    },
  };
};

const mapStateToProps = state => {
  return {
    message: state.defaultReducer.message,
    count: state.defaultReducer.count,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
