import React from 'react';
import { Animated, TouchableOpacity, Image, BackHandler } from 'react-native';
import { backArrow } from '../../assets';

let HEADER_IMAGE_MAX_HEIGHT = 160;
let HEADER_IMAGE_MIN_HEIGHT = 70;

// let HEADER_TEXT_MAX_HEIGHT = 80;
let HEADER_TEXT_MIN_HEIGHT = 40;

export default function HeaderAnimatedImage(props) {
  const headerHeight = props.scrollY.interpolate({
    inputRange: [0, HEADER_IMAGE_MAX_HEIGHT - HEADER_IMAGE_MIN_HEIGHT],
    outputRange: [HEADER_IMAGE_MAX_HEIGHT, HEADER_IMAGE_MIN_HEIGHT],
    extrapolate: 'clamp'
  });
  const headerZindex = props.scrollY.interpolate({
    inputRange: [0, HEADER_IMAGE_MAX_HEIGHT - HEADER_IMAGE_MIN_HEIGHT, 180],
    outputRange: [0, 500, 1000],
    extrapolate: 'clamp'
  });

  const headerTitleBottom = props.scrollY.interpolate({
    inputRange: [
      0,
      HEADER_IMAGE_MAX_HEIGHT - HEADER_IMAGE_MIN_HEIGHT,
      HEADER_IMAGE_MAX_HEIGHT -
        HEADER_IMAGE_MIN_HEIGHT +
        5 +
        HEADER_TEXT_MIN_HEIGHT,
      HEADER_IMAGE_MAX_HEIGHT -
        HEADER_IMAGE_MIN_HEIGHT +
        5 +
        HEADER_TEXT_MIN_HEIGHT +
        26
    ],
    outputRange: [-36, -30, -24, 12],
    extrapolate: 'clamp'
  });

  const headerTitleLeft = props.scrollY.interpolate({
    inputRange: [
      0,
      HEADER_IMAGE_MAX_HEIGHT - HEADER_IMAGE_MIN_HEIGHT,
      HEADER_IMAGE_MAX_HEIGHT -
        HEADER_IMAGE_MIN_HEIGHT +
        5 +
        HEADER_TEXT_MIN_HEIGHT,
      HEADER_IMAGE_MAX_HEIGHT -
        HEADER_IMAGE_MIN_HEIGHT +
        5 +
        HEADER_TEXT_MIN_HEIGHT +
        26
    ],
    outputRange: [24, 24, 24, 72],
    extrapolate: 'clamp'
  });

  const headerFontSize = props.scrollY.interpolate({
    inputRange: [
      0,
      HEADER_IMAGE_MAX_HEIGHT - HEADER_IMAGE_MIN_HEIGHT,
      HEADER_IMAGE_MAX_HEIGHT -
        HEADER_IMAGE_MIN_HEIGHT +
        5 +
        HEADER_TEXT_MIN_HEIGHT,
      HEADER_IMAGE_MAX_HEIGHT -
        HEADER_IMAGE_MIN_HEIGHT +
        5 +
        HEADER_TEXT_MIN_HEIGHT +
        26
    ],
    outputRange: [27, 24, 21, 18],
    extrapolate: 'clamp'
  });

  const imageOpacity = props.scrollY.interpolate({
    inputRange: [
      0,
      HEADER_IMAGE_MAX_HEIGHT - HEADER_IMAGE_MIN_HEIGHT,
      HEADER_IMAGE_MAX_HEIGHT -
        HEADER_IMAGE_MIN_HEIGHT +
        5 +
        HEADER_TEXT_MIN_HEIGHT,
      HEADER_IMAGE_MAX_HEIGHT -
        HEADER_IMAGE_MIN_HEIGHT +
        5 +
        HEADER_TEXT_MIN_HEIGHT +
        26
    ],
    outputRange: [1, 0, 0, 0],
    extrapolate: 'clamp'
  });

  let navigateBack = () => {
    props.navigation.goBack();
    return true;
  };

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', navigateBack);
    // clean up
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', navigateBack);
    };
  });

  const textColor = '#4d5153';
  const whiteColor = 'white';
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: whiteColor,
        height: headerHeight,
        zIndex: headerZindex,
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
      }}
    >
      <TouchableOpacity
        style={{ height: 70, width: 70, paddingTop: 26, zIndex: 1001 }}
        onPress={() => props.navigation.goBack()}
      >
        <Image source={backArrow} resizeMode="contain" style={{ height: 18 }} />
      </TouchableOpacity>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: headerTitleBottom,
          left: headerTitleLeft
        }}
      >
        <Animated.Image
          style={[props.imageStyle, { opacity: imageOpacity }]}
          source={props.imageSource}
          resizeMode="contain"
        />
        <Animated.Text
          style={{
            fontFamily: 'OpenSans-Bold',
            fontSize: headerFontSize,
            lineHeight: 40,
            letterSpacing: 0,
            textAlign: 'left',
            color: textColor
          }}
        >
          {props.title}
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
}
