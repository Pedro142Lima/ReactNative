import React from 'react';
import { View , Text, Image,  StyleSheet, TouchableOpacity} from 'react-native'
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat'


export default function Card({andar}){

    const [fontLoaded] = useFonts({
        Montserrat_700Bold
    })

    if(!fontLoaded) {
        return null;
    }

    return(
        <View>

            <View style={styles.card}>
                <TouchableOpacity style={styles.card2}>
                    <Text style={styles.card3}>{andar}</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: 350,
        height: 100,
        backgroundColor: '#163396',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
     },
     card2: {
        backgroundColor: '#7F97E8',
        width: 180,
        height: 60,
        borderRadius: 12,
         alignItems: 'center',
        justifyContent: 'center',
     },

     card3:{
        fontSize: 20,
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
     },
     
})