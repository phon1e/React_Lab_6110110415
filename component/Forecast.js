import React from 'react'
import { View, Text } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text>{props.temp} °C</Text>
            <Text>{props.pressure} Pa</Text>
            
        </View>
    )
}
//timezone thailand= 25,200 sec by UTC std time/3600 = UTC +7 