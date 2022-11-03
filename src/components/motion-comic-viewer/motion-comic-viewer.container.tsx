import { useState } from 'react'
import { MotionComicViewerComponent } from './motion-comic-viewer'

type Props = {
  comicId: number
  episode: number
  lang: 'ja' | 'en'
  changeLang: (lang: 'ja' | 'en') => void
}

export const MotionComicViewer = ({
  comicId,
  episode,
  lang,
  changeLang
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

  return (
    <MotionComicViewerComponent
      videos={videos[episode - 1]}
      lang={lang}
      changeLang={changeLang}
    />
  )
}
