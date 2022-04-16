import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import settings from './Settings';
import MyButton from './MyButton';
import * as Font from "expo-font";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

    }

    componentDidMount = async () => {
        await Font.loadAsync({
            'myfont': require('./roboto-black.ttf'), // Uwaga: proszę w nazwie fonta nie używać dużych liter
        });
        this.setState({ fontloaded: true })
    }


    onPress = () => {
        this.props.navigation.navigate("Zapis pozycji")
    }

    render() {
        return (
            this.state.fontloaded
                ?
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{
                            fontFamily: 'myfont',
                            fontSize: 50,
                            color: "white"

                        }}>GeoMap App</Text>
                        <Text style={{
                            fontFamily: 'myfont',
                            fontSize: 25,
                            color: "white"
                        }}>Find and save your position</Text>
                    </View>
                    <View style={styles.registerarea}>
                        <MyButton name="START" PressButton={this.onPress} ></MyButton>
                    </View>
                </View>
                :
                null


        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        backgroundColor: '#2596be',
        alignItems: "center",
        justifyContent: "center"


    },
    registerarea: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"

    },
    text: {
        textAlign: "center",
        fontSize: 43,
        color: "white",
        width: 400
    },
    textdata: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 5,
        borderColor: "#2596be",
        color: "#2596be",
        textAlign: "center"

    }
});

export default Main;

