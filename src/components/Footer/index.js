import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Products from '../Products';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>Voçê tambem pode gostar</Text>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <View style={{marginHorizontal: 10}}>
                   <Products img={require('../../assets/cebola.jpeg')} const="R$ 0,90">Cebola</Products>
               </View>
               <View style={{marginHorizontal: 10}}>
                   <Products img={require('../../assets/couve.jpeg')} const="R$ 0,90">Couve</Products>
               </View>
               <View style={{marginHorizontal: 10}}>
                   <Products img={require('../../assets/leite.jpeg')} const="R$ 2,40">Leite</Products>
               </View>
               <View style={{marginHorizontal: 10}}>
                   <Products img={require('../../assets/ovo.jpeg')} const="R$ 0,10">Ovo</Products>
               </View>
           </ScrollView>
        </View> 
   </View>
  );
}


const styles = StyleSheet.create({

   title: {
       fontSize: 24,
       fontFamily: 'Anton_400Regular',
       marginVertical: '2%',
       paddingHorizontal: '2%'
   }
});