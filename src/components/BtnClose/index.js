import React from 'react';
import { View,TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function BtnClose() {
    const navigation = useNavigation();

 return (
     <View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')} >
            <Text style={styles.btnText}>
            Fechar
            </Text>
        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    btn:{
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 10,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 18,
        padding: 20,
        textTransform: 'uppercase',
        color: '#ffffff'
    }
});