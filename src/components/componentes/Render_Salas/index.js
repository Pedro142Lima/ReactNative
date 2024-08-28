import React from 'react';
import { View , Text, Image,  StyleSheet, TouchableOpacity} from 'react-native'
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat'


export default function RenderSalas({andar}){

    const [fontLoaded] = useFonts({
        Montserrat_700Bold
    })

    if(!fontLoaded) {
        return null;
    }

    return (
        <View>
             <Text>{andar}</Text>

             <View>
              
             </View>
        </View>
    );
}
//Terminar o quadrado que vai rednerizar as salas

const styles = StyleSheet.create({
    


    })