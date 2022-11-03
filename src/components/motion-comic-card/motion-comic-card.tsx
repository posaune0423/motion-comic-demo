import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Text, Card, Pressable, Image } from 'native-base'
import { MotionComic } from '../../screens/main-screen'
import { RootStackParamList } from '../../types'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>
  comic: MotionComic
}

export const MotionComicCardComponent = ({ navigation, comic }: Props) => {
  return (
    <Card w={'80%'} rounded="md" shadow={3} mb={4}>
      <Pressable
        onPress={() => navigation.navigate('MotionComicList', comic)}
      >
        <Text fontSize={'md'} fontWeight="bold" my={2}>
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
      </Pressable>
    </Card>
  )
}
