import { RouteProp, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, View, Box, Select } from 'native-base'
import { useState } from 'react'
import { MotionComicViewer } from '../components/motion-comic-viewer'
import { RootStackParamList } from '../types'

type Lang = 'ja' | 'en'

export default function MotionComicDetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'MotionComicDetail'>>()
  const { comic, episode } = route.params
  const [lang, setLang] = useState<Lang>('ja')

  const changeLang = (lang: Lang) => {
    setLang(lang)
  }

  return (
    <View flex={1} backgroundColor="#fff" alignItems="center">
      <Text my={4} fontSize={'lg'}>
        {comic.name} 第{episode}話
      </Text>

      {comic.id === 1 ? (
        <View>
          <MotionComicViewer
            comicId={comic.id}
            episode={episode}
            lang={lang}
            changeLang={changeLang}
          />
          {episode == 1 ? (
            <Box maxW="100%" my={4}>
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
          ) : (
            <Box maxW="100%" my={4}>
              <Select
                selectedValue={lang}
                minWidth="200"
                accessibilityLabel="Choose Language"
                placeholder="Choose Language"
                mt={1}
                onValueChange={lang => setLang(lang as Lang)}
              >
                <Select.Item label="日本語" value="ja" />
              </Select>
            </Box>
          )}
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
