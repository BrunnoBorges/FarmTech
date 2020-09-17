import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#f4511e' }}}>
                <Stack.Screen  name="Home" component={Home} options={{headerShow: false, title: 'FazenTech' }}/>
                <Stack.Screen  name="Produto" component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
} 


export default Routes;