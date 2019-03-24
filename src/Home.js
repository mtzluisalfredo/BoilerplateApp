import React, { Component } from 'react';
import {
  Text,
  StatusBar,
  Dimensions,
  View,
  ScrollView,
  SafeAreaView,
  Animated,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Category } from 'components';
import { ActionCreators } from './redux/action';

const { width } = Dimensions.get('window');

const Cards = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
    title: 'Java Developer',
    subtitle: 'New York City',
    buttonText: 'Apply Now',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1501850305723-0bf18f354fea?w=500',
    title: 'React Native Developer',
    subtitle: 'San Francisco',
    buttonText: 'Learn More',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=500',
    title: 'Node.js Developer',
    subtitle: 'New York City',
    buttonText: 'Apply Now',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1505238680356-667803448bb6?w=500',
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
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } },
            ])}
          >
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                }}
              >
                Nuevas oportunidades
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {Cards.map((item, index) => (
                    <Category
                      imageUri={{
                        uri: item.imageUrl,
                      }}
                      name={item.title}
                      index={index}
                    />
                  ))}
                </ScrollView>
              </View>
              <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Las mejores oportunides para invertir
                </Text>
                {Cards.map(() => (
                  <View
                    style={{
                      width: width - 40,
                      height: 195,
                      marginTop: 20,
                      backgroundColor: 'white',
                      borderColor: '#e0e0e0',
                      borderWidth: 1,
                      borderRadius: 5,
                      // overflow: 'hidden',
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 65,
                      }}
                    >
                      <View
                        style={{
                          flex: 4,
                          alignItems: 'center',
                          flexDirection: 'row',
                          padding: 5,
                        }}
                      >
                        <View>
                          <View
                            style={{
                              borderRadius: 25,
                              backgroundColor: '#9294fb',
                              height: 50,
                              width: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'white',
                              }}
                            >
                              LA
                            </Text>
                          </View>
                        </View>
                        <View style={{ flex: 4, marginLeft: 5 }}>
                          <Text style={{ fontWeight: '500' }}>
                            Luis Alfredo MArtinez Rees Fondeo directo
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            flex: 1,
                            borderColor: '#e0e0e0',
                            borderWidth: 1,
                            borderRadius: 5,
                            height: '80%',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onPress={() => {}}
                        >
                          <Icon
                            name='ios-cart'
                            style={{ color: '#6d788a' }}
                            size={40}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        height: 65,
                        alignItems: 'center',
                        padding: 5,
                        paddingRight: 0,
                      }}
                    >
                      <View style={{ flex: 1, marginRight: 10 }}>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                          <View
                            style={{
                              flex: 4,
                              justifyContent: 'center',
                              backgroundColor: 'gray',
                              borderRadius: 10,
                              height: 10,
                            }}
                          >
                            <View
                              style={{
                                backgroundColor: 'red',
                                width: '30%',
                                height: 10,
                                borderRadius: 10,
                              }}
                            />
                          </View>
                          <View
                            style={{
                              flex: 2,
                              justifyContent: 'center',
                              alignItems: 'flex-end',
                            }}
                          >
                            <Text>$121212.12</Text>
                          </View>
                        </View>
                        <Text>Luis</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        height: 65,
                        flexDirection: 'row',
                        borderTopWidth: 1,
                        borderColor: '#eef0f2',
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          paddingVertical: 10,
                          paddingHorizontal: 5,
                          justifyContent: 'center',
                        }}
                      >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Icon
                            name='ios-calendar'
                            style={{ color: '#6d788a' }}
                            size={5}
                          />
                          <Text>
                            360 dias
                          </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}><Text>Vencimiento</Text></View>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          paddingVertical: 10,
                          paddingHorizontal: 5,
                          justifyContent: 'center',
                          borderLeftWidth: 1,
                          borderRightWidth: 1,
                          borderColor: '#eef0f2',
                        }}
                      >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Icon
                            name='logo-usd'
                            style={{ color: '#6d788a' }}
                            size={5}
                          />
                          <Text>
                            898
                          </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}><Text>Oportunidad</Text></View>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          paddingVertical: 10,
                          paddingHorizontal: 5,
                          justifyContent: 'center',
                        }}
                      >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Icon
                            name='ios-trending-up'
                            style={{ color: '#6d788a' }}
                            size={5}
                          />
                          <Text>
                            17%
                          </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}><Text>Vencimiento</Text></View>
                      </View>
                    </View>
                  </View>
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
  triggerDefault: PropTypes.func,
};

Home.options = () => {
  return {
    topBar: {
      elevation: 0,
      drawBehind: false,
      background: {
        color: 'transparent',
      },
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
