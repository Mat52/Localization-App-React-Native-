import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import MyButton from './MyButton';
import settings from './Settings';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.route.params.id,
            data: []
        };
    }
    componentDidMount() {
        this.load()
    }

    load = () => {

        fetch(settings.address + ':' + settings.port + "/getDetails", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
            })

        })
            .then(response => response.json())
            .then((response) => {

                this.setState({
                    data: response[0]
                })




            })
    }
    render() {
        return (
            <View style={styles.itemstyle}>
                <View style={styles.item0}>
                    <Image source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png' }}
                        style={{ width: 200, height: 200 }} />
                </View>
                <View style={styles.item1}>
                    <Text style={styles.text}>Login:</Text>
                    <Text style={styles.text}>{this.state.data.name}</Text>
                    <Text style={styles.text}>Password:</Text>
                    <Text style={styles.text}>{this.state.data.password}</Text>
                    <Text style={styles.text}>Registered:</Text>
                    <Text style={styles.text}>{this.state.data.date}</Text>
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

    },
    item0: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    item1: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',

    },


    text: {
        fontSize: 30

    }
})
export default Details