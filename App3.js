import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./components/Main"
import List from './components/List';

const Stack = createNativeStackNavigator();


function App3() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Zapis pozycji" component={List} options={{
                    headerStyle: {
                        backgroundColor: '#2596be',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App3;