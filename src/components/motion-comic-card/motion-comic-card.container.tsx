import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { MotionComicCardComponent } from './motion-comic-card'
import { MotionComic } from '../../screens/main-screen'

export type RootStackParamList = {
  Main: any
  MotionComicDetail: MotionComic
}

type Props = {
  comic: MotionComic
}

export const MotionComicCard = ({ comic }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return <MotionComicCardComponent navigation={navigation} comic={comic} />
}
