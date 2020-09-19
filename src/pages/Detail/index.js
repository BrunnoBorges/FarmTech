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
     <View style={{alignItems: "center", backgroundColor: '#ffffff'}}>
       <Image source={require('../../assets/cenoura.jpeg')} style={styles.image} resizeMode="cover"/>
     </View>
     
      <ScrollView >
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={[styles.title, {fontSize: 16}]}>R$ 0,50</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={[styles.title, {fontSize: 14}]}>Qntd</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.numberProduct}>1</Text>
              <Text style={styles.numberProduct}>5</Text>
              <Text style={[styles.numberProduct, { backgroundColor: '#000000', color: '#ffffff'}]}>10</Text>
              <Text style={styles.numberProduct}>15</Text>
              <Text style={styles.numberProduct}>20</Text>
            </View>
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
    width: 250,
    height: 280,
    borderRadius: 5
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  line: {
    borderBottomColor: '#757575',
    borderBottomWidth: 1
  },
  numberProduct: {
    borderWidth: 2, 
    borderRadius: 3, 
    textAlign: 'center', 
    width: 30, 
    borderColor: '#f4511e', 
    marginHorizontal: '1%'
  }
})