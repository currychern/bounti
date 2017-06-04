import React, { Component } from 'react';
import Expo from 'expo';
import {
    StatusBar,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Text,
    View,
    Image,
    Alert,
} from 'react-native';
import { Entypo, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { withNavigation } from '@expo/ex-navigation';
import * as Firebase from 'firebase';

Firebase.initializeApp({
    apiKey: "AIzaSyCOCFZ2r77E190SxpC0F2aqy6JygcE1xpQ",
    authDomain: "bounti-5f992.firebaseapp.com",
    databaseURL: "https://bounti-5f992.firebaseio.com",
    projectId: "bounti-5f992",
    storageBucket: "bounti-5f992.appspot.com",
    messagingSenderId: "894037078076"
});

class BackgroundImage extends Component {
    render() {
        return (
            <Image source={require('../../../img/sharing-tomatoes.jpg')}
                style={styles.backgroundImage}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </Image>
        );
    }
}

class FacebookLogin extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this._fbLogin}>
                <Image source={require('../../../img/fb-login.png')}
                    style={styles.fbLogin}>
                </Image>
            </TouchableOpacity>
        );
    }

    _authenticate = (token) => {
        const provider = Firebase.auth.FacebookAuthProvider;
        const credential = provider.credential(token);
        return Firebase.auth().signInWithCredential(credential);
    }

    _fbLogin = async () => {
        console.log('pressed');
        const APP_ID = '306563733133333'
        const options = {
            permissions: ['public_profile', 'email', 'user_friends'],
        }
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, options);
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            // Alert.alert(
            //     'Logged in!',
            //     `Hi ${(await response.json())}!`,
            // );
            console.log(await response.json());
            this._authenticate(token);
        }
    }

}

export default class AccountScreen extends Component {

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <StatusBar
                     barStyle="light-content"
                />
                <BackgroundImage>
                    <View style={{flexDirection: 'row'}}>
                        <FacebookLogin />
                    </View>
                </BackgroundImage>
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
    fbLogin: {
        padding: 10,
        height: 40,
        width: Dimensions.get('window').width - 120,
    },
});
