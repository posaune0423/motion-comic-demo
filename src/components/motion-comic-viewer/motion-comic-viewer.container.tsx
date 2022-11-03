import { AVPlaybackStatus, Video } from 'expo-av'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Lang } from '../../types'
import { MotionComicViewerComponent } from './motion-comic-viewer'

type Props = {
  comicId: number
  episode: number
  lang: Lang
  inFullScreen: boolean
  handleFullScreen: () => void
  handleLangChange: (lang: Lang) => void
}

export const MotionComicViewer = ({
  comicId,
  episode,
  lang,
  inFullScreen,
  handleFullScreen,
  handleLangChange
}: Props) => {
  const videos = [
    [
      'https://github.com/posaune0423/motion-comic-demo/raw/main/assets/videos/1_ja_en.mp4',
      'https://github.com/posaune0423/motion-comic-demo/raw/main/assets/videos/1_en_en.mp4'
    ],
    [
      'https://github.com/posaune0423/motion-comic-demo/raw/main/assets/videos/2_ja_ja.mp4'
    ]
  ]

  const videoJa = useRef<Video>()
  const videoEn = useRef<Video>()
  const video2 = useRef<Video>()

  const [statusJa, setStatusJa] = useState<AVPlaybackStatus>()
  const [statusEn, setStatusEn] = useState<AVPlaybackStatus>()

  const changeStatusJa = useCallback((status: AVPlaybackStatus) => {
    setStatusJa(status)
  }, [])

  const changeStatusEn = useCallback((status: AVPlaybackStatus) => {
    setStatusEn(status)
  }, [])

  useEffect(() => {
    if (statusJa?.isLoaded && statusEn?.isLoaded) {
      if (!statusJa.isPlaying && !statusEn.isPlaying) {
        videoJa.current?.playAsync()
        videoEn.current?.playAsync()
      }
    }
  }, [statusJa, statusEn])

  return (
    <MotionComicViewerComponent
      videos={videos[episode - 1]}
      lang={lang}
      inFullScreen={inFullScreen}
      handleFullScreen={handleFullScreen}
      handleLangChange={handleLangChange}
      videoJa={videoJa}
      videoEn={videoEn}
      video2={video2}
      changeStatusEn={changeStatusEn}
      changeStatusJa={changeStatusJa}
    />
  )
}
