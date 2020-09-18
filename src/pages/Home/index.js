import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Products from '../../components/Products';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
           <Image source={require('../../assets/home.jpeg')} style={styles.image}/>
           
           <View style={styles.textContainer}>
                <Text style={styles.text}>Produtos</Text>
                <Text style={[styles.text, {color: '#cccccc'}]}>•</Text>
                <Text style={[styles.text, {color: '#cccccc'}]}>Orgânicos</Text>
                <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                    <MaterialIcons name='filter-list' size={20} color='#000'/>
                </TouchableOpacity>
           </View>
       </View>

       <View style={styles.line}/>

       <ScrollView>
           <Text style={[styles.text, {fontSize: 16}]}>Recentes</Text>
           <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={require('../../assets/cenoura.jpeg')} const='R$ 0,50' onClick={() => navigation.navigate('Produto')}>Cenoura</Products>
                <Products img={require('../../assets/cebola.jpeg')} const='R$ 0,90' onClick={() => alert(':( produto indisponivel no momento')}>Cebola</Products>
           </View>
           <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={require('../../assets/leite.jpeg')} const='R$ 2,40' onClick={() => alert(':( produto indisponivel no momento')}>Leite</Products>
                <Products img={require('../../assets/mel.jpeg')} const='R$ 10,00' onClick={() => alert(':( produto indisponivel no momento')}>Mel</Products>
           </View>
           <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={require('../../assets/couve.jpeg')} const='R$ 0,90' onClick={() => alert(':( produto indisponivel no momento')}>Couve</Products>
                <Products img={require('../../assets/tomate.jpeg')} const='R$ 0,50' onClick={() => alert(':( produto indisponivel no momento')}>Tomate</Products>
           </View>
       </ScrollView>
   </View>    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    header: {
        marginBottom: 2
    },
    image: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
        color: '#f4511e'
    },
    line: {
        borderBottomColor: '#757575',
        borderBottomWidth: 1
    }
})