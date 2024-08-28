import React from 'react';
import { View , Text, Image,  StyleSheet, TouchableOpacity} from 'react-native'
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat'


export default function Titulo({titulo}){

    const [fontLoaded] = useFonts({
        Montserrat_700Bold
    })

    if(!fontLoaded) {
        return null;
    }

    return (
        <View>
              <View style={styles.titulo1}>
                <Text style={styles.titulo3}>{titulo}</Text>
              </View>
        </View>
    );
}


const styles = StyleSheet.create({
    //Controle
    //Sessão 1
     titulo1: {
        flexDirection: 'row',
        width: 'auto',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#163396',
        elevation: 5,
     },
     titulo3:{
        fontSize: 25,
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
     },
    })