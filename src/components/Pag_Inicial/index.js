import React from 'react';
import { View , Text, Image,  StyleSheet, TouchableOpacity} from 'react-native'
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
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
                <Image source={require('/Users/einvi/Downloads/projeto1/projeto-reactN/src/images/vetor_frei.png')} style={styles.frei}/>
                <View style={styles.fxtxt}><Text style={styles.txt1}>Feira das profissões</Text></View>
                
            </View>

            <View style={styles.txt_bt}>
                <Text style={{fontFamily: 'Montserrat_700Bold', fontSize: 25, textAlign: 'center', width: 300, marginTop: 100, marginBottom: 100}}>Seja bem-vindo a Feira das Profissões 2024!</Text>
                <TouchableOpacity style={styles.botao} onPressIn={{backgroundColor: '#000'}}>
                <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', marginTop: 15, fontSize: 40, color: '#fff'}}>Começar</Text>
                </TouchableOpacity> 
            </View>

            <View style={styles.wave}>
                <Image source={require('/Users/einvi/Downloads/projeto1/projeto-reactN/src/images/bg waves (1).png')} style={styles.img}/>
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
//Sessão 1
 faixa: {
    flexDirection: 'row',
    width: 720,
    height: 140,
    alignItems:'center',
    backgroundColor: '#163396',
    elevation: 5,
 },
 fxtxt: {
    marginLeft: 20,
 },
 txt1:{
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
    color: '#fff',
    marginTop: 20
 },
 frei: {
    height: 90,
    width: 70,
    margin: 5,
    marginLeft: 10,
    marginTop: 20,
    
 },


 //Sessão 2

 txt_bt: {
    alignItems: 'center',
    justifyContent:'center',
    
 },
 wave: {
    position: 'absolute',
    bottom: 0
 },

 botao: {
    textAlign:'center',
    backgroundColor: '#163396',
    height: 90,
    width: 240,
    borderRadius: 12
 }
})