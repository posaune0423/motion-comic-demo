import * as ScreenOrientation from 'expo-screen-orientation'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { View } from 'native-base'
import { useEffect, useState } from 'react'
import { MotionComicViewer } from '../components/motion-comic-viewer'
import { Lang, RootStackParamList } from '../types'

export default function MotionComicDetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'MotionComicDetail'>>()
  const { comic, episode } = route.params
  const [lang, setLang] = useState<Lang>('ja')
  const [inFullScreen, setInFullScreen] = useState(false)

  useEffect(() => {
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    }
  }, [])

  return (
    <View flex={1} backgroundColor="#fff" alignItems="center">
      {/* {inFullScreenJa || inFullScreenEn ||(
        <Text my={4} fontSize={'lg'}>
          {comic.name} 第{episode}話
        </Text>
      )} */}

      <MotionComicViewer
        comicId={comic.id}
        episode={episode}
        lang={lang}
        inFullScreen={inFullScreen}
        setInFullScreen={setInFullScreen}
        setLang={setLang}
      />

      <StatusBar style="auto" />
    </View>
  )
}
