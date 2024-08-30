import React from 'react';
import { View , Text, Image,  StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { useFonts, Montserrat_700Bold, Montserrat_300Light } from '@expo-google-fonts/montserrat'
import Titulo from '../componentes/Titulo';
export default function Pag_Inicial(){


    const [fontLoaded] = useFonts({
        Montserrat_700Bold
    })

    if(!fontLoaded) {
        return null;
    }



    return(
        <View style={styles.controle}>
            <View style={styles.faixa}>
             <ImageBackground 
        source={require('/Users/einvi/Downloads/projeto1/projeto-reactN/src/images/novaWave.png')} 
        style={styles.background} 
      >
       
        <View style= {styles.alinhamento}>
                <Image source={require('/Users/einvi/Downloads/projeto1/projeto-reactN/src/images/logoFrei.png')} style={styles.frei}/>

                <Text style={{fontFamily: 'Montserrat_700Bold',color: '#fff', fontSize: 30, textAlign: 'center', width: 320, marginTop: 30,}}>Seja bem-vindo a Feira das Profissões 2024!</Text>

                
        </View>
             </ImageBackground>

             <TouchableOpacity style={styles.botao}>
                <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 40, color: '#fff',}}>Começar</Text>
             </TouchableOpacity> 


            </View>

         <View style={styles.footer}> 
                    <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 30, color: '#fff',}}>INSF</Text>

                    <Text style={{textAlign: 'center', fontFamily: 'Montserrat_300Light', fontSize: 15, color: '#fff',}}>2024 C</Text>
         </View>
        </View>

        
    );
}

// <TouchableOpacity style={styles.botao}>
//<Text style={styles.textoBotao}>Clique Aqui</Text>
//</TouchableOpacity> 
//

const styles = StyleSheet.create({
//Controle
controle: {
    height: '100%',
    width: '100%'
},
 background: {
    height: 450,
    width:'auto'
 },
 frei: {
    height: 180,
    width: 180,
    
 },
 alinhamento: {
    alignItems:'center',
    marginTop: 50
 },
 botao: {
    marginTop: 80,
    height: 90,
    width: 250,
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF8D00',

 },
 footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#182754',
    height: 110,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
 }
 }
)