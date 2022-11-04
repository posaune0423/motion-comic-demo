import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'native-base'
import { MotionComicCard } from '../components/motion-comic-card'
import { comicsMock } from '../mock/comic'

export default function MainScreen() {
  const comics = comicsMock

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
