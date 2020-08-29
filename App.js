
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';
import HomeScreen from './screen/home';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={HomeScreen}/>
        <Stack.Screen name ="Zip" component={ZipCodeScreen}/>
        <Stack.Screen name ="Weather" component={WeatherScreen}/>
        { <AppIntroSlider renderItem={ZipItem} data={availableZipItems} onDone={() => navigation.navigate('Home')} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

