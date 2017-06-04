import React, { Component } from 'react';
import Expo from 'expo';
import {
    StyleSheet,
    ScrollView,
    Dimensions,
    TextInput,
    Text,
    View,
    Image,
    Alert,
} from 'react-native';
import { Entypo, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
import Footer from '../Footer';
import ItemViewHeader from '../ItemViewHeader';

const onRequestPress = () => {
    Alert.alert('What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.');
}

class RequestButton extends Component {
    render() {
        return (
            <FontAwesome
                style={{width: null, height: 80, backgroundColor: '#00bd8a', flex: 1, alignItems: 'stretch',}}
                name="cart-arrow-down" size={30} color="#fdf1ed" onPress={onRequestPress} />
        );
    }
}

class BackgroundImage extends Component {
    render() {
        return (
            <Image source={require('../../../img/FFFFFF.png')}
                style={styles.backgroundImage}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </Image>
        );
    }
}

class ItemImage extends Component {
    render() {
        return (
            <Image source={require('../../../img/fresh-carrots.jpg')}
                style={styles.itemImage}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </Image>
        );
    }
}

class ProfileImage extends Component {
    render() {
        return (
            <Image source={require('../../../img/smiling-woman.jpg')}
                style={styles.profileImage}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </Image>
        );
    }
}

class ProfileName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameText: 'Katie'
        };
    }
    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.nameText} onPress={this.onPressTitle}>
                    {this.state.nameText}
                </Text>
            </Text>
        );
    }
}

class RatingImage extends Component {
    render() {
        return (
            <Image source={require('../../../img/rate.jpg')}
                style={styles.ratingImage}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </Image>
        );
    }
}

class ItemName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemText: 'Organic Carrots'
        };
    }
    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.itemText} onPress={this.onPressTitle}>
                    {this.state.itemText}
                </Text>
            </Text>
        );
    }
}

class ItemInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoText: 'I have some leftover carrots from my garden and I am happy to share! :) They are super sweet and tasty!'
        };
    }
    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.infoText} onPress={this.onPressTitle}>
                    {this.state.infoText}
                </Text>
            </Text>
        );
    }
}

class PickupInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickupText: 'Pickup Details'
        };
    }
    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.pickupText} onPress={this.onPressTitle}>
                    {this.state.pickupText}
                </Text>
            </Text>
        );
    }
}

class PickupInfoText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PickupinfoText: 'Lorem Ipsum Dolor Sit Amet'
        };
    }
    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.pickupInfoText} onPress={this.onPressTitle}>
                    {this.state.pickupInfoText}
                </Text>
            </Text>
        );
    }
}

export default class ItemPage extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <ItemViewHeader />
                <ScrollView>
                    <BackgroundImage />
                    <ItemImage />
                    <View style={{alignItems: 'center',}}>
                        <ProfileImage />
                        <ProfileName />
                        <RatingImage />
                    </View>
                    <View style={{alignItems: 'flex-start',}}>
                        <ItemName />
                        <ItemInfo />
                        <PickupInfo />
                        <PickupInfoText />
                    </View>
                </ScrollView>
                <View style={{justifyContent: 'center', flexDirection: 'row-reverse',}}>
                    <RequestButton />
                </View>
            </View>
        )
    }

    // <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
    // <Text onPress={this._handlePress}>HomeScreen!</Text>
    // </View>
    _handlePress = () => {
        this.props.navigator.push('home');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
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
    itemImage: {
        flex: 1,
        width: null,
        height: 250,
        resizeMode: 'cover'
    },
    profileImage: {
        width: 75,
        height: 75,
        resizeMode: 'cover',
        transform: [{
            translateY: -40
        }]
    },
    baseText: {
        fontFamily: 'Arial',
        color: '#000000',
        transform: [{
            translateY: -35
        }]
    },
    nameText: {
        fontSize: 15,
        fontWeight: 'normal',
    },
    ratingImage: {
        width: 200,
        height: 25,
        resizeMode: 'contain',
        transform: [{
            translateY: -35,
        }]
    },
    itemText: {
        fontSize: 25,
        fontWeight: '100',
    },
    infoText: {
        fontSize: 15,
        fontWeight: '200',
        color: 'grey',
    },
    pickupText: {
        fontSize: 25,
        fontWeight: '100',
    },
    pickupInfoText: {
        fontSize: 15,
        fontWeight: '200',
        color: 'grey',
    }
});
