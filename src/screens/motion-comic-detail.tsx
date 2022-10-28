import { RouteProp } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, View, Box, Select } from 'native-base'
import { useState } from 'react'
import { MotionComicViewer } from '../components/motion-comic-viewer'
import { MotionComic } from './main-screen'

type RootStackParamList = {
  Main: any
  MotionComicDetail: MotionComic
}

type Props = {
  route: RouteProp<RootStackParamList, 'MotionComicDetail'>
}

type Lang = 'ja' | 'en'

export default function MotionComicDetailScreen({ route }: Props) {
  const comic = route.params
  const [lang, setLang] = useState<Lang>('ja')

  const changeLang = (lang: Lang) => {
    setLang(lang)
  }

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

      {comic.id === 1 ? (
        <View>
          <Box maxW="300" my={4}>
            <Select
              selectedValue={lang}
              minWidth="200"
              accessibilityLabel="Choose Language"
              placeholder="Choose Language"
              mt={1}
              onValueChange={lang => setLang(lang as Lang)}
            >
              <Select.Item label="日本語" value="ja" />
              <Select.Item label="English" value="en" />
            </Select>
          </Box>

          <MotionComicViewer
            comicId={comic.id}
            lang={lang}
            changeLang={changeLang}
          />
        </View>
      ) : (
        <Box my={10}>
          <Text>Coming soon...</Text>
        </Box>
      )}
      <StatusBar style="auto" />
    </View>
  )
}
