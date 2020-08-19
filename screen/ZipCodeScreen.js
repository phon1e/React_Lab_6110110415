import { FlatList, View, Text, StyleSheet} from 'react-native'
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]

const ZipItem = ({place, code}) => (
    <View style = {styles.ZipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
)

export default function ZipCodeScreen(){
    return(
        <FlatList
            data = {availableZipItems}
            ketExtractor = {item => item.code}
            renderItem =  {({item}) => <ZipItem {...item}/>}
        />
    )
}

const styles = StyleSheet.create({
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace:{
        flex:1
    },
    zipCode:{
        flex: 1
    }
})