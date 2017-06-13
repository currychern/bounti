import React, { Component } from 'react';
import Expo from 'expo';

import AccountScreen from './App/Components/Routes/AccountScreen';
import HomeScreen from './App/Components/Routes/HomeScreen';
import List from './App/Components/Routes/List';
import Item from './App/Components/Routes/Item';
import AddItem from './App/Components/Routes/AddItem';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  account: () => AccountScreen,
  home: () => HomeScreen,
  list: () => List,
  item: () => Item,
  addItem: () => AddItem,
}));

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
