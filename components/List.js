import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView, FlatList } from 'react-native';
import MyButton from './MyButton';
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import ListItem from './ListItem';
import { AsyncStorage } from "react-native"


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    setData = async (data) => {

        console.log("timestamp" + ":" + data.timestamp + ";" + "latitude" + ":" + data.coords.latitude + ";" + "longitude" + ":" + data.coords.longitude + ";")
        await AsyncStorage.setItem('key' + Math.round(Math.random() * 100), "timestamp" + ":" + data.timestamp + ";" + "latitude" + ":" + data.coords.latitude + ";" + "longitude" + ":" + data.coords.longitude + ";");
        let keys = await AsyncStorage.getAllKeys();
        let stores = await AsyncStorage.multiGet(keys);
        let maps = stores.map((result, i, store) => {
            let key = store[i][0];
            let value = store[i][1];
            console.log(key, value)
        });
    }

    getPosition = async () => {

        let pos = await Location.getCurrentPositionAsync({})
        alert(JSON.stringify(pos, null, 4))

        this.setData(pos);
    }

    setPermissions = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            alert('odmawiam przydzielenia uprawnień do czytania lokalizacji')
        }
    }
    componentDidMount = async () => {
        this.setPermissions();
    }

    onPress = (param) => {
        switch (param) {
            case 1:
                this.getPosition();

            case 2:

            case 3:


        }


    }
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.buttons1}>
                    <MyButton name="POBIERZ I ZAPISZ POZYCJĘ" PressButton={() => this.onPress(1)} ></MyButton>
                    <MyButton name="USUŃ WSZYSTKIE DANE" PressButton={() => this.onPress(2)} ></MyButton>
                </View>
                <View style={styles.buttons2}>
                    <MyButton name="PRZEJDŹ DO MAPY" PressButton={() => this.onPress(3)} ></MyButton>
                </View>
                <View style={styles.user}>

                </View>
            </View >

        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center"

    },
    buttons1: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1
    },
    buttons2: {
        flex: 1,



    },
    user: {
        flex: 10,
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

export default List;

