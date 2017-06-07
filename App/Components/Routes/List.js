import React, { Component } from 'react';
import Expo from 'expo';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Footer from '../Footer';
import Header from '../Header';
import { withNavigation } from '@expo/ex-navigation';

@withNavigation
class Listing extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this._goToItem}>
        <View style={styles.listingView}>
          <View>
            <Image style={styles.listingPic}
                   source={require('../../../img/fresh-carrots.jpg')} />
            <Text style={styles.pricetag}>free </Text>
          </View>
          <View style={styles.profilePicView}>
            <Image style={styles.profilePic}
                   source={require('../../../img/smiling-woman-crop.jpg')} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.type}>Produce</Text>
            <Text style={styles.title}>Organic Carrots</Text>
            <View style={styles.horizontalText}>
              <Text style={styles.time}>3-6 PM</Text>
              <Text style={styles.distance}>0.5 mi</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _goToItem = () => {
    this.props.navigator.push('item');
  }
}

export default class List extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Header />
          <ScrollView>
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </ScrollView>
          <Footer />
        </View>
    )
  }

  // <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
  // <Text onPress={this._handlePress}>HomeScreen!</Text>
  // </View>
  _handlePress = () => {
    this.props.navigator.push('list');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listingView: {
    height: 310,
  },

  listingPic: {
    width: null,
    height: 200,
    resizeMode: 'cover',
  },
  pricetag: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 24,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
  },

  profilePicView: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: '10%',
    zIndex: 999,
  },
  profilePic: {
    bottom: 30,
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },

  textView: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    top: 200,
  },
  type: {
    fontSize: 14,
    color: '#00bd8a',
  },
  title: {
    paddingBottom: 10,
    fontSize: 24,
  },

  horizontalText: {
    flexDirection: 'row',
  },
  time: {
    flex: 3,
    fontSize: 14,
    color: '#00bd8a',
  },
  distance: {
    flex: 1,
    fontSize: 14,
  },
});
