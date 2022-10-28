import { RouteProp } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, View } from 'native-base'
import { MotionComicViewer } from '../components/motion-comic-viewer'
import { MotionComic } from './main-screen'

type RootStackParamList = {
  Main: any
  MotionComicDetail: MotionComic
}

type Props = {
  route: RouteProp<RootStackParamList, 'MotionComicDetail'>
}

export default function MotionComicDetailScreen({ route }: Props) {
  const comic = route.params
  return (
    <View flex={1} backgroundColor="#fff" alignItems="center">
      <Text my={4} fontSize={'lg'}>
        {comic.name}
      </Text>
      <Image
        resizeMode="contain"
        source={{
          uri: comic.image
        }}
        alt="Card Image"
        size="xl"
        w={'80%'}
      />
      <MotionComicViewer comicId={comic.id} />
      <StatusBar style="auto" />
    </View>
  )
}
