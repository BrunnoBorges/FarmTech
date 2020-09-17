import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Products(props) {

    function filterDesc(desc) {
        if(desc.length < 27) {
            return desc;
        }

        return `${desc.substring(0, 25)}...`;
    }

 return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <Image style={styles.productsImage} source={props.img}/>
        <Text style={styles.productsText}>{filterDesc(props.children)}</Text>
        <Text style={styles.priceText}>{props.const}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    productsImage: {
        width: 120,
        height: 120,
        borderRadius: 5
    },
    productsText: {
        fontSize: 14,
        color: '#cacaca',
        fontWeight: 'bold'
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#757575'
    }

})