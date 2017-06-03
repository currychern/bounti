import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, Button, Alert } from 'react-native';
import { Entypo, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
import Footer from './App/Components/Footer';
import Header from './App/Components/Header';


class SearchButton extends Component {
  render() {
    return (
      <FontAwesome
        style={{width: 40, height: 40, backgroundColor: '#ef7049', paddingLeft: 9, paddingTop: 7}}
        name="search" size={25} color="#fdf1ed" onPress={onButtonPress} />
    );
  }
}

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Header />
        <BackgroundImage>
          <View style={{flexDirection: 'row'}}>
            <SearchBar />
            <SearchButton />
          </View>
        </BackgroundImage>
        <Footer />
      </View>
    );
  }
}


class BackgroundImage extends Component {
  render() {
    return (
      <Image source={require('./img/sharing-tomatoes.jpg')}
             style={styles.backgroundImage}>
        <View style={styles.container}>
          {this.props.children}
        </View>
      </Image>
    );
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
        placeholder='TEST'
        placeholderTextColor = '#757575'
        value={this.state.text}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
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
