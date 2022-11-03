import * as ScreenOrientation from 'expo-screen-orientation'
import { Box } from 'native-base'
import { Dimensions } from 'react-native'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'
import { memo, RefObject } from 'react'
import VideoPlayer from 'expo-video-player'
import { setStatusBarHidden } from 'expo-status-bar'
import { Lang } from '../../types'
import { LangSelector } from '../langSelector'
import { MutableRefObject } from 'react'

type Props = {
  videos: string[]
  videoJa: MutableRefObject<Video | undefined>
  videoEn: MutableRefObject<Video | undefined>
  video2: MutableRefObject<Video | undefined>
  lang: Lang
  inFullScreen: boolean
  handleFullScreen: () => void
  handleLangChange: (lang: Lang) => void
  changeStatusJa: (status: AVPlaybackStatus) => void
  changeStatusEn: (status: AVPlaybackStatus) => void
}

export const MotionComicViewerComponent = memo(
  ({
    videos,
    videoEn,
    videoJa,
    video2,
    lang,
    inFullScreen,
    handleLangChange,
    handleFullScreen,
    changeStatusJa,
    changeStatusEn
  }: Props) => {
    return (
      <>
        {videos.length > 1 ? (
          <>
            <Box display={lang === 'ja' ? 'block' : 'none'}>
              <VideoPlayer
                playbackCallback={status => changeStatusJa(status)}
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
                    handleFullScreen()
                    await ScreenOrientation.lockAsync(
                      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
                    )
                    console.log('entered full screen')
                  },
                  exitFullscreen: async () => {
                    setStatusBarHidden(false, 'fade')
                    handleFullScreen()
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
                  width: inFullScreen
                    ? Dimensions.get('window').width - 40
                    : Dimensions.get('window').width
                }}
                header={
                  <LangSelector
                    lang={lang}
                    handleLangChange={handleLangChange}
                  />
                }
              />
            </Box>
            <Box display={lang === 'en' ? 'block' : 'none'}>
              <VideoPlayer
                playbackCallback={status => changeStatusEn(status)}
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
                    handleFullScreen()
                    await ScreenOrientation.lockAsync(
                      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
                    )
                    console.log('entered full screen')
                  },
                  exitFullscreen: async () => {
                    setStatusBarHidden(false, 'fade')
                    handleFullScreen()
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
                  width: inFullScreen
                    ? Dimensions.get('window').width - 40
                    : Dimensions.get('window').width
                }}
                header={
                  <LangSelector
                    lang={lang}
                    handleLangChange={handleLangChange}
                  />
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
                  handleFullScreen()
                  await ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
                  )
                  console.log('entered full screen')
                },
                exitFullscreen: async () => {
                  setStatusBarHidden(false, 'fade')
                  handleFullScreen()
                  await ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.PORTRAIT_UP
                  )
                  console.log('exited full screen')
                }
              }}
              style={{
                videoBackgroundColor: 'black',
                height: inFullScreen
                  ? Dimensions.get('window').width - 50
                  : 200,
                width: inFullScreen ? Dimensions.get('window').height - 40 : Dimensions.get('window').width
              }}
            />
          </Box>
        )}
      </>
    )
  }
)
