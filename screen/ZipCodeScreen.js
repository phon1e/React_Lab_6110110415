import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
    }}>
        <View style = {styles.ZipItem}>
            <Text style={styles.zipPlace}> City Name: {place}</Text>
            <Text style={styles.zipCode}> Zip Code: {code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        
        <ImageBackground source={require('../home.jpg')} style= {styles.backdrop}>
            <View>  
                <FlatList
                    data = {availableZipItems}
                    ketExtractor = {item => item.code}
                    renderItem =  {({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                <StatusBar style="auto" />
                <Button color="orange" title="BACK" onPress={() => navigation.navigate('Home')} />
               
            </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 35,

    },
    zipPlace:{
        flex:1,
        color: 'yellow',
        textShadowColor:'black'
    },
    zipCode:{
        fontSize: 18,
        paddingLeft:25,
        color: 'yellow',
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black'
    },
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
    }
})