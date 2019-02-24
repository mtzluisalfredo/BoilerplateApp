import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types'
import Interactable from 'react-native-interactable';

// eslint-disable-next-line
import Card from './Card';

export default class Swipeable extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    cards: PropTypes.array.isRequired,
  };

  static HorizontalMargin = 10;

  static VerticalMargin = 20;

  static BoundaryPadding = 30;

  static BoundaryBounce = 0;

  static ContainerToCardWidthRatio = 1.35;

  state = {
    cardWidth: 0,
    swipeableWidth: 0,
    snapPoints: [],
    swipeableBoundary: 0,
  };

  onLayout = e => {
    const containerWidth = e.nativeEvent.layout.width;
    const { cards } = this.props;

    // calculate the width of a card
    const cardWidth = containerWidth / Swipeable.ContainerToCardWidthRatio;
    this.setState({ cardWidth });

    // calculate total swipeable width
    const swipeableWidth = cardWidth * cards.length;
    this.setState({ swipeableWidth });

    // calculate incrementation amount for snap points
    const incrementAmountForOuterCards = cardWidth - (containerWidth - cardWidth) / 2 + Swipeable.HorizontalMargin;
    const incrementAmountForInnerCards = cardWidth;

    // calculate snap points
    let x = 0;
    const snapPoints = cards.map((card, index) => {
      const snapPointForCard = { x };
      if (index === 0 || index === cards.length - 2) {
        x -= incrementAmountForOuterCards;
      } else {
        x -= incrementAmountForInnerCards;
      }
      return snapPointForCard;
    });
    this.setState({ snapPoints });

    // calculate the swiping boundary
    const swipeableBoundary = snapPoints[cards.length - 1].x - Swipeable.BoundaryPadding;
    this.setState({ swipeableBoundary });
  };

  render() {
    const { cards } = this.props;
    const { cardWidth, snapPoints, swipeableBoundary, swipeableWidth } = this.state;
    let cardsToRender;

    if (cardWidth > 0) {
      cardsToRender = cards.map((card, index) => (
        <Card
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          subtitle={card.subtitle}
          buttonText={card.buttonText}
          width={cardWidth}
        />
      ));
    }

    return (
      <View onLayout={this.onLayout}>
        <Interactable.View
          snapPoints={snapPoints}
          // does not work on Android
          boundaries={
            Platform.OS === 'ios'
              ? {
                left: swipeableBoundary,
                right: Swipeable.BoundaryPadding,
                bounce: Swipeable.BoundaryBounce,
              }
              : { bounce: Swipeable.BoundaryBounce }
          }
          horizontalOnly
          animatedNativeDriver
          style={[
            // eslint-disable-next-line no-use-before-define
            styles.interactableContainer,
            { width: swipeableWidth },
          ]}
        >
          {cardsToRender}
        </Interactable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  interactableContainer: {
    flexDirection: 'row',
    marginHorizontal: Swipeable.HorizontalMargin,
    marginVertical: Swipeable.VerticalMargin,
  },
});
