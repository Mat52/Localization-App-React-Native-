import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView, FlatList } from 'react-native';
import MyButton from './MyButton';
import ListItem from './ListItem';
import settings from './Settings';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            users: []
        };

    }
    componentDidMount() {
        this.load()
    }

    load = () => {
        console.log("load")
        fetch(settings.address + ':' + settings.port + "/getdata", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })

        })
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    users: response
                })
                console.log(this.state.users)
            })
    }

    onPress = () => {

        this.props.navigation.navigate("Register")
    }
    navigate = (data) => {
        console.log(data)
        this.props.navigation.navigate("Details", { id: data })
    }
    render() {
        return (

            <View style={styles.container}>
                <MyButton name="BACK TO LOGIN PAGE" PressButton={this.onPress} ></MyButton>
                <View style={styles.user}>
                    <FlatList
                        data={this.state.users}
                        renderItem={({ item }) => (
                            <ListItem id={item.id} username={item.name} password={item.password} date={item.date} change={this.load} navigatethis={this.navigate}></ListItem>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View >

        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center"
    },
    user: {
        flexDirection: "row",
        justifyContent: "center"
    },
    header: {
        flex: 1,
        backgroundColor: 'aqua',
        justifyContent: "center",


    },
    registerarea: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center"

    },
    text: {

        fontSize: 10
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
        borderColor: "aqua",
        color: "blue",
        textAlign: "center"

    }
});

export default Main;

