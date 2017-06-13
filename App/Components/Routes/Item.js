import React, { Component } from 'react';
import Expo from 'expo';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Footer from '../Footer';
import Header from '../Header';

class Listing extends Component {
  render() {
    return (
      <View>
        <View>
          <Image style={styles.listingPic}
                 source={require('../../../img/fresh-carrots.jpg')} />
          <Text style={styles.pricetag}>free </Text>
        </View>
        <View style={styles.profilePicView}>
          <Image style={styles.profilePic}
                 source={require('../../../img/smiling-woman-crop.jpg')} />
          <View style={styles.profileDetail}>
            <Text style={styles.name}>Katie</Text>
            <View style={styles.rating}>
              <FontAwesome name="star" size={12} color="#ed6035" />
              <FontAwesome name="star" size={12} color="#ed6035" />
              <FontAwesome name="star" size={12} color="#ed6035" />
              <FontAwesome name="star" size={12} color="#ed6035" />
              <FontAwesome name="star-half-o" size={12} color="#ed6035" />
            </View>
          </View>
        </View>
        <View style={styles.textView}>

          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>I have some leftover carrots from my garden and I'm happy to share! :) They're super sweet and tasty!</Text>

          <Text style={styles.title}>Pickup Details</Text>
          <Text style={styles.description}>Pickup Mondays through Fridays from 3-6PM. Please check in with the reception desk when you are looking for Kate.</Text>

        </View>
      </View>
    );
  }
}

export default class Item extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <Listing title="Organic Carrots"/>
        </ScrollView>
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: 'center',
    zIndex: 999,
  },
  profilePic: {
    bottom: 40,
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
  profileDetail: {
    position: 'absolute',
    alignItems: 'center',
    top: 40,
  },
  name: {
    fontSize: 20,
  },
  rating: {
    flexDirection: 'row',
  },

  textView: {
    paddingHorizontal: 20,
  },
  type: {
    fontSize: 14,
    color: '#00bd8a',
  },
  title: {
    paddingVertical: 10,
    fontSize: 24,
  },
  description: {
    fontSize: 16,
    paddingVertical: 10,
    textAlign: 'justify',
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
