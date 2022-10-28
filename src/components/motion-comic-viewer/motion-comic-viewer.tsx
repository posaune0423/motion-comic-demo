import { View, Spinner, HStack } from 'native-base'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'
import { useRef, useState } from 'react'

type Props = {
  videos: string[]
  lang: 'ja' | 'en'
  changeLang: (lang: 'ja' | 'en') => void
}

export const MotionComicViewerComponent = ({ videos, lang }: Props) => {
  const videoJa = useRef<Video>(null)
  const videoEn = useRef<Video>(null)

  const [statusJa, setStatusJa] = useState<AVPlaybackStatus>()
  const [statusEn, setStatusEn] = useState<AVPlaybackStatus>()

  return (
    <View mt={8} maxWidth={'100%'}>
      {!statusJa?.isLoaded && !statusEn?.isLoaded ? (
        <HStack space={8} justifyContent="center" alignItems="center">
          <Spinner size="lg" />
        </HStack>
      ) : undefined}

      <Video
        ref={videoJa}
        style={{
          width: 320,
          height: 200,
          display: lang === 'ja' ? 'flex' : 'none'
        }}
        resizeMode={ResizeMode.COVER}
        isMuted={lang !== 'ja'}
        shouldPlay={true}
        source={{
          uri: videos[0]
        }}
        onLoad={status => setStatusJa(() => status)}
      />
      <Video
        ref={videoEn}
        style={{
          width: 320,
          height: 200,
          display: lang === 'en' ? 'flex' : 'none'
        }}
        resizeMode={ResizeMode.COVER}
        isMuted={lang !== 'en'}
        shouldPlay={true}
        source={{
          uri: videos[1]
        }}
        onLoad={status => setStatusEn(() => status)}
      />
    </View>
  )
}
