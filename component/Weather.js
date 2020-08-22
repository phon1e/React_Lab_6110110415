import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View, Button } from 'react-native'
import Forecast from './Forecast'
import { useNavigation } from '@react-navigation/native';

export default function Weather(props){
    const navigation = useNavigation()
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        pressure: 0,
        timezone: 0,
        country: 0
    })
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=02986f47077a35751acc6d2a6a99290f`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    pressure: json.main.pressure,
                    timezone: json.timezone,
                    country: json.sys.country
                });
            })
            .catch((error) => {
                console.warn(error); 
            }); 
        }
    }, [props.zipCode])
       
   

    return(
        <ImageBackground source={require('../weather.jpg')} style= {styles.backdrop}>
            <View>
                <Text >Zip Code </Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
            <Button color="orange" title="Go back                                              " 
            onPress={() => navigation.navigate('Zip')} />
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }

    
})