import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import ProductDetail from '../../components/ProductDetail';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: ''
  })


 return (
   <View style={styles.container}>
     
      <Image source={require('../../assets/cenoura.jpeg')} style={styles.image} resizeMode="cover"/>
      <ScrollView >
        <View>
          <View>
            <Text style={[styles.title, {fontSize: 20}]}>R$ 0,50</Text>
          </View>
          <View opacity={0.4}>
            <Text style={[styles.title, {fontSize: 30}]}>Cenoura</Text>
          </View>
        </View> 

        <View style={styles.line}/>

        <ProductDetail />

        <Button />

        <View style={styles.line}/>

        <Footer />

    </ScrollView>    
   </View>
   
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F6F6F6'
  },
  image: {
    width: '100%',
    borderRadius: 5
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  line: {
    borderBottomColor: '#757575',
    borderBottomWidth: 1
  }
})