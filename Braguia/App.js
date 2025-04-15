import * as React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePageScreen from './screens/WelcomePageScreen';
import LoginScreen from './screens/LoginScreen';
import HomePageScreen from './screens/HomePageScreen';
import ItemListScreen from './screens/ItemListScreen';
import ItemScreen from './screens/ItemScreen';
import MapScreen from "./screens/MapScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName='WelcomePage'
        screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                name="WelcomePage"
                component={WelcomePageScreen}
                options={{title: 'Welcome'}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{title: 'Login'}}
            />
            <Stack.Screen
                name="HomePageScreen"
                component={HomePageScreen}
                options={{title: 'HomePage'}}
            />
            <Stack.Screen
                name="ItemListScreen"
                component={ItemListScreen}
                options={{title: 'ItemList'}}
            />
            <Stack.Screen
                name="ItemScreen"
                component={ItemScreen}
                options={{title: 'Item'}}
            />
            <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{title: 'Map'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

const styles = StyleSheet.create({
    logo: {
        top: 50,
        flex:1,
        alignItems:'center',
    },
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    button: {
        backgroundColor: "black",
        padding:5,
        marginLeft: 160,
        marginRight: 160,
        borderRadius: 10,
        alignItems:'center',
        bottom: 150,
    },
    buttonText: {
        color: "white"
    }
});
