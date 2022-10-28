import { View } from 'native-base'
import { ResizeMode, Video } from 'expo-av'
import { useRef } from 'react'

type Props = {
  videos: string[]
}

export const MotionComicViewerComponent = ({ videos }: Props) => {
  const video = useRef(null)

  return (
    <View flex={1} justifyContent="center" maxWidth={'100%'}>
      <Video
        ref={video}
        style={{ width: 320, height: 200 }}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        source={{
          uri: videos[0]
        }}
      />
    </View>
  )
}
