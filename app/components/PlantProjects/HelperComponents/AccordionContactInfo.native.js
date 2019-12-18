import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { globe, rocket, tree_outline, outline_email } from '../../../assets';
import styles from '../../../styles/donation/donation.native';
import i18n from '../../../locales/i18n';
import { getLocalRoute } from '../../../actions/apiRouting';
import { getISOToCountryName } from '../../../helpers/utils';
export default class AccordionContactInfo extends Component {
  state = {
    showInfo: true
  };

  toggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  getAddress(address) {
    let str = [];
    Object.keys(address).forEach((item, value) => {
      try {
        if (item == 'countryCode') {
          value = getISOToCountryName(address[item]).country;
        } else {
          value = address[item];
        }
      } catch (error) {
        console.log(error);
      }
      str.push(value);
    });
    return str.join(', ');
  }
  render() {
    const {
      slug,
      updateStaticRoute,
      navigation,
      url,
      _goToURL,
      address,
      email,
      name
    } = this.props;
    let iconName = this.state.showInfo ? 'chevron-up' : 'chevron-down';
    return (
      <View style={styles.paymentCardView}>
        <TouchableOpacity
          style={styles.paymentModeView}
          onPress={() => {
            this.toggleInfo();
          }}
        >
          <Text style={[styles.paymentModeTitle, { color: '#4d5153' }]}>
            {i18n.t('label.contact_details')}
          </Text>
          <Icon
            name={iconName}
            size={14}
            color="#4d5153"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>

        {/* Hidden until expanded by User */}
        {this.state.showInfo ? (
          <View
            style={[
              styles.expandedPaymentModePaypal,
              { alignItems: 'flex-start', paddingRight: 20 }
            ]}
          >
            {slug ? (
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image
                  source={tree_outline}
                  style={{
                    width: 17,
                    height: 17,
                    marginRight: 10
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    updateStaticRoute(
                      getLocalRoute('app_treecounter'),
                      navigation,
                      { treeCounterId: slug, titleParam: name }
                    );
                  }}
                >
                  <Text style={styles.viewProfileText}>
                    {i18n.t('label.view_profile')}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}

            {url ? (
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image
                  source={globe}
                  style={{
                    width: 17,
                    height: 17,
                    marginRight: 10
                  }}
                />
                <TouchableOpacity onPress={() => _goToURL(url)}>
                  <Text
                    style={styles.viewProfileText}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {url}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}

            {address ? (
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image
                  source={rocket}
                  style={{
                    width: 17,
                    height: 17,
                    marginRight: 10
                  }}
                />
                <Text style={styles.viewProfileText}>
                  {this.getAddress(address)}
                </Text>
              </View>
            ) : null}
            {email ? (
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image
                  source={outline_email}
                  style={{
                    width: 17,
                    height: 17,
                    marginRight: 10
                  }}
                />
                <Text
                  style={styles.viewProfileText}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {email}
                </Text>
              </View>
            ) : null}
          </View>
        ) : null}
        {/* Hidden until expanded by User */}
      </View>
    );
  }
}
