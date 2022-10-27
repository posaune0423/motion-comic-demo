import { RouteProp, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, View } from 'native-base'
import { MotionComic } from './main-screen'

type RootStackParamList = {
  Main: any
  MotionComicDetail: MotionComic
}

type Props = {
  route: RouteProp<RootStackParamList, 'MotionComicDetail'>
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function MotionComicDetailScreen({ route, navigation }: Props) {
  const comic = route.params
  return (
    <View flex={1} backgroundColor="#fff" alignItems="center">
      <Text my={4} fontSize={'lg'}>{comic.name}</Text>
      <Image
        resizeMode="contain"
        source={{
          uri: comic.image
        }}
        alt="Card Image"
        size="xl"
        w={'80%'}
      />
      <StatusBar style="auto" />
    </View>
  )
}
