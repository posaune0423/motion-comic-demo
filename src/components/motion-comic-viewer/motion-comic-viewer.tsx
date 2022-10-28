import { View } from 'native-base'
import { ResizeMode, Video } from 'expo-av'
import { useRef } from 'react'

type Props = {
  videos: string[]
  lang: 'ja' | 'en' | 'ch'
  changeLang: (lang: 'ja' | 'en' | 'ch') => void
}

export const MotionComicViewerComponent = ({
  videos,
  lang,
  changeLang
}: Props) => {
  const video = useRef(null)

  return (
    <View mt={8} maxWidth={'100%'}>
      <Video
        ref={video}
        style={{
          width: 320,
          height: 200,
          display: lang === 'ja' ? 'flex' : 'none'
        }}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        source={{
          uri: videos[0]
        }}
      />
      <Video
        ref={video}
        style={{
          width: 320,
          height: 200,
          display: lang === 'en' ? 'flex' : 'none'
        }}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        source={{
          uri: videos[1]
        }}
      />
      <Video
        ref={video}
        style={{
          width: 320,
          height: 200,
          display: lang === 'ch' ? 'flex' : 'none'
        }}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        source={{
          uri: videos[2]
        }}
      />
    </View>
  )
}
