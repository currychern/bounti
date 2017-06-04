import React, { Component } from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import Expo from 'expo';
import AccountScreen from './App/Components/Routes/AccountScreen';
import HomeScreen from './App/Components/Routes/HomeScreen';
import List from './App/Components/Routes/List';

import {
    createRouter,
    NavigationProvider,
    StackNavigation,
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
    account: () => AccountScreen,
    home: () => HomeScreen,
    list: () => List,
}));

export default class App extends Component {
    render() {
        return (
            <NavigationProvider router={Router}>
                <StackNavigation initialRoute="account" />
            </NavigationProvider>
        );
    }
}

Expo.registerRootComponent(App);
