import React, { Component } from 'react';
import Expo from 'expo';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Image,
  ScrollView,
  Alert,
  Picker,
} from 'react-native';
import { addListing } from '../../Helpers/API';

const onButtonPress = (type, category, food, quantity, expiration, location) => {
  addListing(type, category, food, quantity, expiration, location);
};

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      category: '',
      food: '',
      quantity: '0',
      expiration: '5 days',
      location: '78701',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>Type</Text>
          <Picker
            selectedValue={this.state.type}
            onValueChange={(typeValue, typeIndex) => this.setState({type: typeValue})}>
            <Picker.Item label="Raw" value="raw" />
            <Picker.Item label="Prepared" value="prepared" />
          </Picker>
          <Text>Category</Text>
          <Picker
            selectedValue={this.state.category}
            onValueChange={(categoryValue, categoryIndex) => this.setState({category: categoryValue})}>
            <Picker.Item label="Produce" value="produce" />
            <Picker.Item label="Baked Goods" value="baked goods" />
          </Picker>
          <Text>Food</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(food) => this.setState({food})}
            placeholder='What food are you donating?'
            value={this.state.food}
          />
          <Text>Quantity</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(quantity) => this.setState({quantity})}
            placeholder='How much are you donating?'
            value={this.state.quantity}
          />
          <Text>Expiration</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(expiration) => this.setState({expiration})}
            placeholder='How long is the food good for?'
            value={this.state.expiration}
          />
          <Text>Location</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(location) => this.setState({location})}
            placeholder='What is the zip code of the pickup location?'
            value={this.state.location}
          />
          <Button
            onPress={() => onButtonPress(
              this.state.type,
              this.state.category,
              this.state.food,
              this.state.quantity,
              this.state.expiration,
              this.state.location,
            )}
            title="Save" />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
