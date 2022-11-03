import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'native-base'
import { MotionComicCard } from '../components/motion-comic-card'
import { MotionComic, RootStackParamList } from '../types'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const comics: MotionComic[] = [
  {
    id: 1,
    name: 'シュート！',
    image:
      'https://dengekionline.com/images/Gwb8/o5YZ/B5T9/TGx4/Elked72keoIlcPhYPph4Ea3QRZ3TUuHudW8QuzaiF1bTfM2sucZDvzNiowCiTJ7M68pl0X2b4RuEg0zF_main.jpg'
  },
  {
    id: 2,
    name: 'NARUTO',
    image: 'https://news.pierrot.jp/wp-content/uploads/2020/07/NARUTO_MV.jpg'
  },
  {
    id: 3,
    name: 'Death Note',
    image:
      'https://cs1.animestore.docomo.ne.jp/anime_kv/img/20/18/7/20187_1_d2.jpg?1648798207818'
  }
]

export default function MainScreen({ navigation }: Props) {
  return (
    <View flex={1} backgroundColor="#fff" alignItems="center">
      <Text my={3} fontSize="3xl" fontWeight={'bold'}>
        Motion Comic List 📕
      </Text>

      {comics.map(comic => {
        return <MotionComicCard comic={comic} key={comic.id} />
      })}

      <StatusBar style="auto" />
    </View>
  )
}
