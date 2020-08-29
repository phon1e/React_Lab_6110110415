import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Forecast(props){
    return(
        <View>
            <Text  style={styles.innerText}>Weather: {props.main}</Text>
            <Text  style={styles.innerText}>description: {props.description} .</Text>
            <Text  style={styles.innerText}>Temp: {props.temp} °C</Text>
            <Text  style={styles.innerText}>Pressure: {props.pressure} Pa</Text>
            <Text  style={styles.innerText}>UTC + {(props.timezone)/3600}</Text>
            <Text  style={styles.innerText}>Country: {props.country}</Text>
        </View>
    )
}
//timezone thailand= 25,200 sec by UTC std time/3600 = UTC +7 

const styles = StyleSheet.create({
    innerText: {
        color: 'yellow',
        textAlign: 'center',
        fontSize: 25,
        paddingBottom: 15,
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black'

    },
})