import React, { Component } from 'react';
import { View } from 'react-native';
import Expo from 'expo';
import {
    StyleSheet,
    Dimensions,
    TextInput,
    Text,
    Image,
    Alert,
    AppRegistry,
} from 'react-native';
import { Entypo, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';

const onBackPress = () => {
    Alert.alert('One day this will actually be a nav button');
}

class BackButton extends Component {
    render() {
        return (
            <FontAwesome
                style={{width: 50, height: 50, backgroundColor: '#f1fded',}}
                name="chevron-left" size={30} color="#00bd8a" onPress={onBackPress} />
        );
    }
}

class ItemLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: 'Austin, TX \n',
            bodyText: 'Hyde Park'
        };
    }
    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={this.onPressTitle}>
                    {this.state.titleText}
                </Text>
                <Text numberOfLines={5}>
                    {this.state.bodyText}
                </Text>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Arial',
        color: '#00bd8a'
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'normal'
    },
    bodyText: {
        fontSize: 20,
        fontWeight: 'normal'
    },
})

AppRegistry.registerComponent('ItemLocation', () => ItemLocation);

class ItemViewHeader extends Component {
  render() {
    return (
      <View style={{width: null, height: 75, backgroundColor: '#f1fded', flexDirection: 'row', justifyContent: 'space-around'}}>
        <BackButton />
        <ItemLocation />
      </View>
    );
  }
}


module.exports = ItemViewHeader;
