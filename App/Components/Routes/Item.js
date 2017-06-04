import React, { Component } from 'react';
import Expo from 'expo';
import {
    StyleSheet,
    Dimensions,
    TextInput,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';
import { Entypo, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
import Footer from '../Footer';
import Header from '../Header';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Success!!' };
    }

    render() {
        return (
            <TextInput
              style={styles.searchbar}
              onChangeText={(text) => this.setState({text})}
              placeholder='TEST'
              placeholderTextColor = '#757575'
              value={this.state.text}
            />
        );
    }
}

class Listing extends Component {
    render() {
        return (
          <View>
            <Image source={require('../../../img/fresh-carrots.jpg')}
                style={styles.listing}>
                <View style={styles.tagContainer}>
                    {this.props.children}
                    <Text style={styles.tag}>free </Text>
                    <Text />
                </View>
            </Image>
            <View style={styles.picContainer}>
                {this.props.children}
                <Image source={require('../../../img/smiling-woman-crop.jpg')}
                    style={styles.profilePic}>
                </Image>
            </View>
            <View style={styles.textView}>
              <Text>Katie</Text>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesome
                    style={{paddingLeft: 0, paddingTop: 0}}
                    name="star" size={20} color="#ed6035" />
                  <FontAwesome
                    style={{paddingLeft: 0, paddingTop: 0}}
                    name="star" size={20} color="#ed6035" />
                  <FontAwesome
                    style={{paddingLeft: 0, paddingTop: 0}}
                    name="star" size={20} color="#ed6035" />
                  <FontAwesome
                    style={{paddingLeft: 0, paddingTop: 0}}
                    name="star" size={20} color="#ed6035" />
                  <FontAwesome
                    style={{paddingLeft: 0, paddingTop: 0}}
                    name="star-half-o" size={20} color="#ed6035" />
                  <Text>42</Text>
                </View>
              <Text style={styles.titleText}>Organic Carrots</Text>
              <Text style={styles.descriptionText}>Produce . Hyde Park (2 min away)</Text>
            </View>
          </View>

        );
    }
}

export default class Item extends Component {
  static route = {
      navigationBar: {
          title: 'Austin, TX (Hyde Park)',
      }
  }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View>
                <Listing />
              </View>
              <Footer />
            </View>
        )
    }

    // <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
    // <Text onPress={this._handlePress}>HomeScreen!</Text>
    // </View>
    _handlePress = () => {
        this.props.navigator.push('item');
    }
}

const styles = StyleSheet.create({
    searchbar: {
        paddingLeft: 20,
        height: 40,
        width: Dimensions.get('window').width - 120,
        borderWidth: 1,
        borderColor: '#1d4f5f',
        fontSize: 15
    },
    container: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    },
    tagContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end'
    },
    tag: {
      color: 'white',
      fontSize: 24,
      backgroundColor: 'rgba(0,0,0,0.5)',
      paddingHorizontal: 10,
      paddingVertical: 5
    },
    profilePic: {
      height: 60,
      width: 60,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: 'white',
      marginRight: 30
    },
    textView: {
      paddingTop: 50,
      paddingHorizontal: 10
    },
    titleText: {
      fontSize: 20
    },
    descriptionText: {
      fontSize: 18,
      color: '#888'
    },
    listing: {
        width: null,
        height: 200,
        resizeMode: 'cover'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    },
    search: {
        padding: 10,
        height: 40,
        width: Dimensions.get('window').width - 120,
        backgroundColor: 'rgba(255,255,255,0.8)',
        fontSize: 15
    },
});
