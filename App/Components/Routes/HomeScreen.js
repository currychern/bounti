import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Footer from '../Footer';
import Header from '../Header';
import { withNavigation } from '@expo/ex-navigation';

@withNavigation
class SearchButton extends Component {
  render() {
    return (
      <FontAwesome
        style={styles.searchButton}
        name="search" size={25} color="#fdf1ed" onPress={this._goToList} />
      );
    }

    _goToList = () => {
      this.props.navigator.push('list');
    }
  }

  class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '' };
    }

    render() {
      return (
        <TextInput
          style={styles.search}
          onChangeText={(text) => this.setState({text})}
          placeholder='What type of food are you looking for?'
          placeholderTextColor = '#757575'
          value={this.state.text}
        />
      );
    }
  }

  class BackgroundImage extends Component {
    render() {
      return (
        <Image source={require('../../../img/sharing-tomatoes.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.contents}>
          {this.props.children}
        </View>
      </Image>
    );
  }
}

export default class HomeScreen extends Component {
  // static route = {
  //     navigationBar: {
  //         title: 'Home',
  //     }
  // }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <BackgroundImage>
          <View style={{flexDirection: 'row'}}>
            <SearchBar />
            <SearchButton />
          </View>
        </BackgroundImage>
        <Footer />
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigator.push('home');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  search: {
    padding: 10,
    height: 40,
    width: Dimensions.get('window').width - 120,
    backgroundColor: 'rgba(255,255,255,0.8)',
    fontSize: 15,
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: '#ef7049',
    paddingLeft: 9,
    paddingTop: 7,
  }
});
