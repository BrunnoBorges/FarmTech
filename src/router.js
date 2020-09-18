import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Market from './pages/Market';

const Stack = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#f4511e' }}}>
                <Stack.Screen  name="Home" component={Home} options={{headerShow: false, title: 'FazenTech' }}/>
                <Stack.Screen  name="Produto" component={Detail} options={{
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 15}}>
                            <Feather 
                                name="shopping-cart"
                                size={24}
                                color="#ffffff"
                            />
                        </TouchableOpacity>
                    )
                }} />
                <Stack.Screen  name="Carrinho" component={Market}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
} 


export default Routes;