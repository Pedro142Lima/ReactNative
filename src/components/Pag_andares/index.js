import React from 'react';
import { View , Text, Image,  StyleSheet, TouchableOpacity} from 'react-native'
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import Titulo from '../componentes/Titulo';
import Card from '../componentes/Card';

export default function PagAndares(){
    const [fontLoaded] = useFonts({
        Montserrat_700Bold
    })

    if(!fontLoaded) {
        return null;
    }

    return(
        <View style={styles.controle}>

        <Titulo titulo={'Escolha o andar'}/>

        <View style={styles.PagAndares1}>
                <Card andar={'3º Andar'}/>
                <Card andar={'2º Andar'}/>
                <Card andar={'1º Andar'}/>
                <Card andar={'Térreo'}/>
        </View>

        <View style={styles.wave}>
                <Image source={require('/Users/einvi/Downloads/projeto1/projeto-reactN/src/images/bg waves (1).png')}/>
        </View>
            
        </View>
    );
}

// <TouchableOpacity style={styles.botao}>
//<Text style={styles.textoBotao}>Clique Aqui</Text>
//</TouchableOpacity> 
//



const styles = StyleSheet.create({
PagAndares1: {
alignItems: 'center',
padding: 10,
},
wave: {
    position: 'absolute',
    bottom: 0,
 },
 controle: {
    height: '100%',
    width: '100%'
 },

   
})