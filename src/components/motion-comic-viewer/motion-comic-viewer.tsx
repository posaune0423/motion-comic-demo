import { View, Spinner, HStack, Box } from 'native-base'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

type Props = {
  videos: string[]
  lang: 'ja' | 'en'
  changeLang: (lang: 'ja' | 'en') => void
}

export const MotionComicViewerComponent = ({ videos, lang }: Props) => {
  const videoJa = useRef<Video>(null)
  const videoEn = useRef<Video>(null)
  const video2 = useRef<Video>(null)
  console.log(videos.length)

  const [statusJa, setStatusJa] = useState<AVPlaybackStatus>()
  const [statusEn, setStatusEn] = useState<AVPlaybackStatus>()

  useEffect(() => {
    if (statusJa?.isLoaded && statusEn?.isLoaded) {
      if (!statusJa.isPlaying && !statusEn.isPlaying) {
        videoJa.current?.playAsync()
        videoEn.current?.playAsync()
      }
    }
  }, [statusJa, statusEn])

  return (
    <View mt={8} maxWidth={'100%'}>
      {!statusJa?.isLoaded && !statusEn?.isLoaded ? (
        <HStack space={8} justifyContent="center" alignItems="center">
          <Spinner size="lg" />
        </HStack>
      ) : undefined}

      {videos.length > 1 ? (
        <Box>
          <Video
            ref={videoJa}
            style={{
              width: 320,
              height: 200,
              display: lang === 'ja' ? 'flex' : 'none'
            }}
            resizeMode={ResizeMode.COVER}
            isMuted={lang !== 'ja'}
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
            source={{
              uri: videos[1]
            }}
            onLoad={status => setStatusEn(() => status)}
          />
        </Box>
      ) : (
        <Box>
          <Video
            ref={video2}
            style={{
              width: 320,
              height: 200,
              display: 'flex'
            }}
            resizeMode={ResizeMode.COVER}
            source={{
              uri: videos[0]
            }}
            shouldPlay={true}
            onLoad={status => setStatusJa(() => status)}
          />
        </Box>
      )}
    </View>
  )
}
