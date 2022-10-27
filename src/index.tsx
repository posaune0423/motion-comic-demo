import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './screens/main-screen'
import MotionComicDetail from './screens/motion-comic-detail'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="MotionComicDetail" component={MotionComicDetail} />
    </Stack.Navigator>
  )
}

export default App
