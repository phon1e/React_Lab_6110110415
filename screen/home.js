import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen(){
    const navigation = useNavigation()
    return(
        <ImageBackground source={require('../home.jpg')} style={styles.backdrop}>
            <View>
                <Text style={styles.HeaderText}>! Welcome !</Text>
                <Text style={styles.innerText}>Weather Application</Text>
                <StatusBar style="auto" /> 
                <Button color="yellow" title=">> Weather right now <<" onPress={() => navigation.navigate('Zip')} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: '100%',
        height: '100%',
    },
    HeaderText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black',
        textAlign: 'center',
        color: 'white',
        fontSize: 50,
    },
    innerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black',
        paddingBottom: 300
    },
})