import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  )
}

export default App
