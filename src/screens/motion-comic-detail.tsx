import * as ScreenOrientation from 'expo-screen-orientation'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'native-base'
import { useCallback, useEffect, useState } from 'react'
import { MotionComicViewer } from '../components/motion-comic-viewer'
import { Lang, RootStackParamList } from '../types'

export default function MotionComicDetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'MotionComicDetail'>>()
  const { comic, episode } = route.params
  const [lang, setLang] = useState<Lang>('ja')
  const [inFullScreen, setInFullScreen] = useState(false)

  const handleFullScreen = useCallback(() => {
    setInFullScreen(prev => !prev)
  }, [])

  const handleLangChange = useCallback((lang: Lang) => {
    setLang(lang)
  }, [])

  useEffect(() => {
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    }
  }, [])

  return (
    <View flex={1} backgroundColor="#fff" alignItems="center">
      {inFullScreen || (
        <Text my={4} fontSize={'lg'}>
          {comic.name} 第{episode}話
        </Text>
      )}

      <MotionComicViewer
        comicId={comic.id}
        episode={episode}
        lang={lang}
        inFullScreen={inFullScreen}
        handleFullScreen={handleFullScreen}
        handleLangChange={handleLangChange}
      />

      <StatusBar style="auto" />
    </View>
  )
}
