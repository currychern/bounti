import React, { Component } from 'react';
import Expo from 'expo';
import {
    StyleSheet,
    Dimensions,
    TextInput,
    Text,
    View,
    Image,
} from 'react-native';
import { Entypo, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
import Footer from '../Footer';
import Header from '../Header';

class Listing extends Component {
    render() {
        return (
            <Image source={require('../../../img/sharing-tomatoes.jpg')}
                style={styles.listing}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </Image>
        );
    }
}

export default class ListView extends Component {
    static route = {
        navigationBar: {
            title: 'List View',
        }
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Header />
                <Listing></Listing>
                <Footer />
            </View>
        )
    }

    // <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
    // <Text onPress={this._handlePress}>HomeScreen!</Text>
    // </View>
    _handlePress = () => {
        this.props.navigator.push('listview');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listing: {
        height: 200,
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
