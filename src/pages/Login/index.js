import React from 'react';
import { View, KeyboardAvoidingView, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";



export default function Login() {
    const [textEmail, setTextEmail] = React.useState('');
    const [textSenha, setTextSenha] = React.useState('');
    const navigation = useNavigation();
 return (
   <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
          <Image
            source={require('../../assets/logo.png')}
          />
      </View>
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            label="Email"
            value={textEmail}
            onChangeText={textEmail => setTextEmail(textEmail)}
        />
        <TextInput
             style={styles.input}
            label="Senha"
            value={textSenha}
            onChangeText={textSenha => setTextSenha(textSenha)}
        />

        <Button  
            style={styles.button}
            mode="contained" 
            onPress={() => navigation.navigate('Home')}>
            Acessar
        </Button>

        <Button  
            style={[styles.button, {backgroundColor: '#757575'}]}
            mode="contained" 
            onPress={() => console.log('Pressed')}>
            Criar conta Gratuita
        </Button>
          
      </View>
   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLogo: {
        alignItems: 'center'
    },
    container: {
        width: '80%',
    },
    input: {
        backgroundColor: '#ffffff',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#f4511e',
        marginBottom: 10
    }

})