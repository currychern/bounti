import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, Button, Alert } from 'react-native';
import { Entypo, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';

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

class Header extends Component {
  render() {
    return (
      <View style={{width: null, height: 25, backgroundColor: '#00bd8a'}} />
    );
  }
}

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
        placeholder='What are you looking for?'
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
