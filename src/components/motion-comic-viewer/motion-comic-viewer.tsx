import * as ScreenOrientation from 'expo-screen-orientation'
import { Box, Select } from 'native-base'
import { Dimensions } from 'react-native'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import VideoPlayer from 'expo-video-player'
import { setStatusBarHidden } from 'expo-status-bar'
import { Lang } from '../../types'

type Props = {
  videos: string[]
  lang: Lang
  inFullScreen: boolean
  setInFullScreen: (inFullScreen: boolean) => void
  setLang: (lang: Lang) => void
}

export const MotionComicViewerComponent = ({
  videos,
  lang,
  inFullScreen,
  setLang,
  setInFullScreen
}: Props) => {
  const videoJa = useRef<Video>(null)
  const videoEn = useRef<Video>(null)
  const video2 = useRef<Video>(null)

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
    <>
      {videos.length > 1 ? (
        <>
          <Box display={lang === 'ja' ? 'block' : 'none'}>
            <VideoPlayer
              playbackCallback={status => setStatusJa(status)}
              videoProps={{
                shouldPlay: false,
                resizeMode: ResizeMode.COVER,
                source: {
                  uri: videos[0]
                },
                ref: videoJa as any,
                isMuted: lang !== 'ja'
              }}
              fullscreen={{
                inFullscreen: inFullScreen,
                enterFullscreen: async () => {
                  setStatusBarHidden(true, 'fade')
                  setInFullScreen(!inFullScreen)
                  await ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
                  )
                  console.log('entered full screen')
                },
                exitFullscreen: async () => {
                  setStatusBarHidden(false, 'fade')
                  setInFullScreen(!inFullScreen)
                  await ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.PORTRAIT_UP
                  )
                  console.log('exited full screen')
                }
              }}
              style={{
                videoBackgroundColor: 'black',
                height: inFullScreen
                  ? Dimensions.get('window').height - 50
                  : 200,
                width: inFullScreen ? Dimensions.get('window').width - 40 : 320
              }}
              header={
                <Select
                  selectedValue={lang}
                  minWidth="100"
                  accessibilityLabel="Choose Language"
                  placeholder="Choose Language"
                  onValueChange={newLang => setLang(newLang as Lang)}
                >
                  <Select.Item label="日本語" value="ja" />
                  <Select.Item label="English" value="en" />
                </Select>
              }
            />
          </Box>
          <Box display={lang === 'en' ? 'block' : 'none'}>
            <VideoPlayer
              playbackCallback={status => setStatusEn(status)}
              videoProps={{
                shouldPlay: false,
                resizeMode: ResizeMode.COVER,
                source: {
                  uri: videos[1]
                },
                ref: videoEn as any,
                isMuted: lang !== 'en'
              }}
              fullscreen={{
                inFullscreen: inFullScreen,
                enterFullscreen: async () => {
                  setStatusBarHidden(true, 'fade')
                  setInFullScreen(!inFullScreen)
                  await ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
                  )
                  console.log('entered full screen')
                },
                exitFullscreen: async () => {
                  setStatusBarHidden(false, 'fade')
                  setInFullScreen(!inFullScreen)
                  await ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.PORTRAIT_UP
                  )
                  console.log('exited full screen')
                }
              }}
              style={{
                videoBackgroundColor: 'black',
                height: inFullScreen
                  ? Dimensions.get('window').height - 50
                  : 200,
                width: inFullScreen ? Dimensions.get('window').width - 40 : 320
              }}
              header={
                <Select
                  selectedValue={lang}
                  minWidth="100"
                  accessibilityLabel="Choose Language"
                  placeholder="Choose Language"
                  onValueChange={newLang => setLang(newLang as Lang)}
                >
                  <Select.Item label="日本語" value="ja" />
                  <Select.Item label="English" value="en" />
                </Select>
              }
            />
          </Box>
        </>
      ) : (
        <Box display={'block'}>
          <VideoPlayer
            videoProps={{
              shouldPlay: false,
              resizeMode: ResizeMode.COVER,
              source: {
                uri: videos[0]
              },
              ref: video2 as any
            }}
            fullscreen={{
              inFullscreen: inFullScreen,
              enterFullscreen: async () => {
                setStatusBarHidden(true, 'fade')
                setInFullScreen(!inFullScreen)
                await ScreenOrientation.lockAsync(
                  ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
                )
                console.log('entered full screen')
              },
              exitFullscreen: async () => {
                setStatusBarHidden(false, 'fade')
                setInFullScreen(!inFullScreen)
                await ScreenOrientation.lockAsync(
                  ScreenOrientation.OrientationLock.PORTRAIT_UP
                )
                console.log('exited full screen')
              }
            }}
            style={{
              videoBackgroundColor: 'black',
              height: inFullScreen ? Dimensions.get('window').width - 50 : 200,
              width: inFullScreen ? Dimensions.get('window').height - 40 : 320
            }}
          />
        </Box>
      )}
    </>
  )
}
