import React, { Component } from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import Expo from 'expo';
import HomeScreen from './App/Components/Routes/HomeScreen';
import ListView from './App/Components/Routes/ListView';

import {
    createRouter,
    NavigationProvider,
    StackNavigation,
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
    home: () => HomeScreen,
    listView: () => ListView,
}));

// const onButtonPress = () => {
//     // Expo.Facebook.logInWithReadPermissionsAsync(306563733133333, {['public_profile', 'email', 'user_friends'], 'web'})
//     Alert.alert('Button has been pressed!');
// };

export default class App extends Component {
    render() {
        return (
            <NavigationProvider router={Router}>
                <StackNavigation initialRoute="home" />
            </NavigationProvider>
        );
    }
}

Expo.registerRootComponent(App);
