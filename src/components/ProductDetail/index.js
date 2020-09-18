import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductDetail() {
 return (
     <View>
        <View>
            <Text style={[styles.text, {fontSize: 16}]}>Detalhe do produto</Text>
        </View>
        <View style={styles.textContent}>
            <Text style={styles.textDescription}>
            As Cenouras orgânicas possuem mais nutrientes, são mais saborosos, 
            garantem uma fonte saudável de alimento e ainda colaboram para um meio de vida mais sustentável, 
            uma vez que os agricultores tratam o meio ambiente com o respeito necessário.
            </Text>
        </View>
     </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
        marginTop: 20,
        color: '#f4511e'
    },
    textDescription: {
        textAlign: 'justify',
        marginVertical: '2%',
        marginHorizontal: '2%',
        lineHeight: 20
    }
})
