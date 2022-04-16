import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import MyButton from './MyButton';
import settings from './Settings';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
        };
    }
    onPress = () => {
        console.log(this.state.id)
        fetch(settings.address + ':' + settings.port + "/deleteuser", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
            })

        })
            .then(response => response.text())
            .then((response) => {


                this.props.change();

            })

    }

    gotoDetails = () => {
        this.props.navigatethis(this.props.id);
    }


    render() {
        return (
            <View style={styles.itemstyle}>
                <View style={styles.viewelement0}>
                    <Image source={{ uri: 'https://w7.pngwing.com/pngs/704/285/png-transparent-web-browser-computer-icons-android-android-globe-world-earth.png' }}
                        style={{ width: 40, height: 40 }} />
                </View>
                <View style={styles.viewelement1}>
                    <Text style={styles.text}>{this.props.id}: {this.props.username} {this.props.password} </Text>
                </View>
                <View style={styles.viewelement2}>
                    <MyButton name="DETAILS" PressButton={this.gotoDetails}></MyButton>
                </View >
                <View style={styles.viewelement3}>
                    <MyButton name="DELETE" PressButton={this.onPress}></MyButton>
                </View>
            </View >
        );
    }

}


const styles = StyleSheet.create({
    itemstyle: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    viewelement0: {
        marginTop: 20,
        width: 40,
        margin: 10
    },
    viewelement1: {
        marginTop: 30,
        width: 110,
        margin: 10
    },
    viewelement2: {
        width: 120,
        margin: 10
    },
    viewelement3: {
        width: 100,
        margin: 10
    },
    text: {
        fontSize: 15
    }
})
export default ListItem