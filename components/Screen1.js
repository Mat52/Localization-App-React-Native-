import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Button
                    title="go to screen2"
                    onPress={() => this.props.navigation.navigate("s2", { a: 1, b: 2 })}
                />
            </View>
        );
    }
}

export default Screen1;

