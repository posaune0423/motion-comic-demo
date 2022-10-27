import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Button } from 'native-base'

type RootStackParamList = {
  Main: undefined
  About: undefined
}

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function MainScreen({ navigation }: Props) {
  return (
    <View
      flex={1}
      backgroundColor="#fff"
      alignItems="center"
      justifyContent="center"
    >
      <Text>Main Screen !!</Text>
      <Button my={3} onPress={() => navigation.navigate('About')}>
        About
      </Button>
      <StatusBar style="auto" />
    </View>
  )
}
