import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Geojson, Marker } from 'react-native-maps';
import Header from '../Header/BackHeader';
import PrimaryButton from '../Common/Button/PrimaryButton';

const Location = () => (
  <View style={{ flex: 1 }}>
    <Header />
    <View style={styles.subHeaderContainer}>
      <Text style={styles.subHeaderText}>Location A</Text>
      <Text
        style={styles.subHeadingText}
      >{`Please draw your planting area.\nYou can add one or more polygons.`}</Text>
    </View>
    <MapView
      initialRegion={{
        latitude: 24.995607335811723,
        longitude: 67.05481767654419,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.0421
      }}
      mapType={'satellite'}
      style={{ flex: 1 }}
    >
      <Marker
        draggable
        coordinate={{
          latitude: 24.995607335811723,
          longitude: 67.05481767654419
        }}
      >
        <View style={styles.markerContainer}>
          <View style={styles.markerCircle}>
            <Text style={styles.markerText}>A</Text>
          </View>
          <View style={{ width: 5, height: 40, backgroundColor: '#78B806' }} />
        </View>
      </Marker>
    </MapView>
    <View style={styles.bottomBtnContainer}>
      <PrimaryButton buttonStyle={styles.buttonStyle}>
        <Text style={styles.continueBtn}>{'Select Location & Continue'}</Text>
      </PrimaryButton>
    </View>
  </View>
);

const styles = StyleSheet.create({
  bottomBtnContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center'
  },
  markerCircle: {
    width: 30,
    height: 30,
    backgroundColor: '#78B806',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  markerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  subHeaderContainer: {
    marginHorizontal: 15
  },
  subHeaderText: {
    fontSize: 27,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 40,
    color: '#4d5153'
  },
  markerText: {
    color: 'white'
  },
  subHeadingText: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 24,
    color: '#4d5153',
    marginVertical: 15
  },
  buttonStyle: {
    width: 240,
    height: 52,
    borderRadius: 100,
    backgroundColor: '#89b53a'
  },
  continueBtn: {
    width: 72,
    height: 22,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.21,
    textAlign: 'center',
    color: '#ffffff'
  }
});

export default Location;