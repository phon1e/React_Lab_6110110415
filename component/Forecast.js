import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Forecast(props){
    return(
        <View>
            <Text>Weather: {props.main}</Text>
            <Text>description: {props.description}</Text>
            <Text>Temp: {props.temp} °C</Text>
            <Text>Pressure: {props.pressure} Pa</Text>
            <Text>UTC + {(props.timezone)/3600}</Text>
            <Text>Country: {props.country}</Text>
        </View>
    )
}
//timezone thailand= 25,200 sec by UTC std time/3600 = UTC +7 