import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    onPress = () => this.props.PressButton()
    render() {
        return (
            <TouchableOpacity style={styles.touchableopacity} onPress={this.onPress}>
                <Text style={styles.text}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }

}

MyButton.propTypes = {
    name: PropTypes.string.isRequired,

};
const styles = StyleSheet.create({
    touchableopacity: {


        marginTop: 20,
        margin: 20



    },
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"

    }
})
export default MyButton