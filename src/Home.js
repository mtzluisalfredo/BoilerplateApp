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
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
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
                Nuevas oportunidades
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
                  <TouchableOpacity
                    key={`${item.title}-card`}
                    onPress={() => this.goDetail(item, index)}
                    style={{
                      width: width - 20,
                      height: 150,
                      marginTop: 20,
                      backgroundColor: 'white',
                      // borderColor: '#e0e0e0',
                      // borderWidth: 1,
                      borderRadius: 5,
                      padding: 10,
                      // overflow: 'hidden',
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 0 },
                      shadowOpacity: 0.1,
                      shadowRadius: 5,
                      elevation: 2,
                    }}
                  >
                    <View
                      style={{
                        height: 80,
                        // borderBottomWidth: 1,
                        // borderBottomColor: '#e0e0e0',
                        justifyContent: 'center',
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: '#7BC6D7',
                            width: 70,
                            height: 70,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                          }}
                        >
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              fontSize: 24,
                            }}
                          >
                            LA
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            marginLeft: 5,
                            height: 70,
                            justifyContent: 'center',
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: 'bold',
                              color: '#666680',
                            }}
                          >
                            Luis Alfredo Martinez Reyes Luis
                          </Text>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 16,
                              color: '#617FD8',
                            }}
                          >
                            $128999.00
                          </Text>
                          <Text
                            style={{
                              fontWeight: '600',
                              fontSize: 14,
                              color: '#A1A1B0',
                            }}
                          >
                            Plazo de 360 dias
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{ height: 5, width: '100%', backgroundColor: '#A8C4EB', borderRadius: 10 }}>
                      <View style={{ height: 5, width: '50%', backgroundColor: '#627FD9', borderRadius: 10 }} />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Text style={{ color: '#A1A1B0' }}>Oportunidad</Text>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: '#696982',
                              fontSize: 16,
                            }}
                          >
                            1029
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderLeftWidth: 1,
                          borderRightWidth: 1,
                          borderColor: 'white',
                        }}
                      >
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Text style={{ color: '#A1A1B0' }}>Retorno</Text>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: '#68B01F',
                              fontSize: 16,
                            }}
                          >
                            17%
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Text style={{ color: '#A1A1B0' }}>Fondeada</Text>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: '#496BD4',
                              fontSize: 16,
                            }}
                          >
                            47%
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
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
