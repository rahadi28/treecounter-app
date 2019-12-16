import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/review.native';
// const { width, height } = Dimensions.get('window');
export function GenerateStar(fill, score = 0) {
  let repeater = Array(fill ? Number(score) : 5 - Number(score)).fill(1);
  // console.log('repeater', repeater);
  return repeater.map((data, index) => (
    <Icon
      key={index}
      name="star"
      size={16}
      solid={fill}
      style={{ color: '#89b53a', marginLeft: 2 }}
    />
  ));
}
export default class SingleRating extends Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 0,
          marginRight: 1
        }}
      >
        {this.props.name ? (
          <Text style={[styles.ratingsText, { paddingBottom: -2 }]}>
            {this.props.name}
          </Text>
        ) : null}
        {this.props.indexScore
          ? GenerateStar(true, this.props.indexScore.score)
          : null}
        {this.props.indexScore
          ? GenerateStar(false, this.props.indexScore.score)
          : null}
      </View>
    );
  }
}
