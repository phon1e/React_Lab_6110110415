import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Weather from './component/Weather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';
import HomeScreen from './screen/home';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={HomeScreen}/>
        <Stack.Screen name ="Zip" component={ZipCodeScreen}/>
        <Stack.Screen name ="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

