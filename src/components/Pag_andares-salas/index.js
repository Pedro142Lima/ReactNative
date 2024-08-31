import React from 'react';
import { View , Text, Image,  StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import Titulo from '../componentes/Titulo';
import Card from '../componentes/Card';

export default function Pag_Andares09908(){
    const [fontLoaded] = useFonts({
        Montserrat_700Bold
    })

    if(!fontLoaded) {
        return null;
    }

    <View style={styles.controle}>
        
        <Text style= {{backgroundColor: '#000'}}>OIIIIIIIIIIiiiiiiiiiiiii</Text>

        </View>

        
    ;
}

// <TouchableOpacity style={styles.botao}>
//<Text style={styles.textoBotao}>Clique Aqui</Text>
//</TouchableOpacity> 
//

const styles = StyleSheet.create({
//Controle
controle: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
},

 }
 
)