import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Button() {
    const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Carrinho')} >
            <Text style={styles.btnText}> Comprar</Text>
       </TouchableOpacity>  
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn:{
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 10,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 18,
        textTransform: 'uppercase',
        color: '#ffffff'
    }
})