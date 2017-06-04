import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Entypo, Octicons, Ionicons } from '@expo/vector-icons';

const onButtonPress = () => {
  Alert.alert('Pressed!');
};

class Footer extends Component {
  render() {
    return (
      <View style={{width: null, height: 50, backgroundColor: '#00bd8a', flexDirection: 'row', justifyContent: 'center',}}>
        <Entypo
          style={{flex: 1, paddingLeft: 50, paddingTop: 5}}
          name="bowl" size={35} color="white" onPress={onButtonPress} />
        <Octicons
          style={{flex: 1, paddingTop: 5}}
          name="gift" size={40} color="white" onPress={onButtonPress} />
        <Ionicons
          style={{flex: 1, paddingTop: 5}}
          name="md-more" size={40} color="white" onPress={onButtonPress} />
      </View>
    );
  }
}

module.exports = Footer;
