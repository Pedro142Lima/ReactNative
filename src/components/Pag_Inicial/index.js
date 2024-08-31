import React from 'react';
import { View , Text, Image,  StyleSheet, TouchableOpacity, ImageBackground, TextInput} from 'react-native'
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

        
        <ImageBackground   source={require('/Users/einvi/Downloads/projeto1/projeto-reactN/src/images/BackgroundScanner.png')} style={styles.background_scanner}>
      <View style={styles.txt_quadrado}>
            <Text style={{fontSize: 30, fontFamily: 'Montserrat_700Bold', color: '#fff'}}>Validação de entrada</Text>

            <Image source={require('/Users/einvi/Downloads/projeto1/projeto-reactN/src/images/Quadrado_leitor.png')} style={styles.quadrado}/>
      </View>
        </ImageBackground>

          <View style={styles.faixa}>
             <ImageBackground  source={require('/Users/einvi/Downloads/projeto1/projeto-reactN/src/images/novaWave.png')} style={styles.background}>
             <View>
                
             </View>
            </ImageBackground>
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
    width: '100%',
    flexDirection: 'column'

},
background: {
   height: 450,
   width: '100%',
   transform: [{ scaleY: -1 }],
 },
 faixa: {
   flex: 1,
   justifyContent: 'flex-end', // Isso força o contêiner a alinhar os filhos ao fundo
   alignItems: 'center',
 },

 background_scanner: {
   height: 450,
   width: '100%',
 },
 quadrado: {
   height: 250,
   width: 250,
 },
 txt_quadrado: {
   alignItems: 'center',
   paddingTop: 40,
   gap: 30,
   backgroundColor: 'rgba(000, 000, 000, 0.4)',
   height: '100%'
 }
 }
)