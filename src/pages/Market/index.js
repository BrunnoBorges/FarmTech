import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import BtnClose from '../../components/BtnClose';

export default function Market({navigation}) {
  
  navigation.setOptions({
    headerTitle: ''
  })

 return (
   <View style={styles.container}>
     <View style={{backgroundColor: '#ffffff', width: '80%', height: 330, borderRadius: 5,}}>
       <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: "center"}}>
         <Text style={styles.text}>Produto</Text>
         <Text style={[styles.text, {color: '#f4511e', fontSize: 14}]}> Cenoura </Text>
       </View>
       <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: "center", marginBottom: 30}}>
         <Text style={styles.text}>Qntd</Text>
         <Text style={[styles.text, {color: '#f4511e', fontSize: 14}]}> 10 </Text>
       </View>
       <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: "center", marginBottom: 30}}>
         <Text style={[styles.text, {fontSize: 20}]}>Valor Total</Text>
         <Text style={[styles.text, {color: '#f4511e', fontSize: 14}]}> R$ 5,00 </Text>
       </View>
       <View style={{textAlign: 'center', alignItems: 'center'}}>
            <MaterialIcons 
              name="thumb-up"
              size={40}
            /> 
            <Text style={[styles.text, {color: '#757575'}]}>Obrigado por comprar na FarmTech</Text>
        </View>
       <View style={{alignItems: 'center'}}>
          <BtnClose/>
       </View>
     </View>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cccccc'
  },
  text: {
    alignItems: 'center', 
    textAlign: 'center', 
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Anton_400Regular'
  }
})