import { useState } from 'react'
import { MotionComicViewerComponent } from './motion-comic-viewer'

type Props = {
  comicId: number
  lang: 'ja' | 'en'
  changeLang: (lang: 'ja' | 'en') => void
}

export const MotionComicViewer = ({ comicId, lang, changeLang }: Props) => {
  const videos = [
    'https://github.com/posaune0423/motion-comic-demo/raw/main/assets/videos/1_ja_en.mp4',
    'https://github.com/posaune0423/motion-comic-demo/raw/main/assets/videos/1_en_en.mp4'
  ]

  return (
    <MotionComicViewerComponent
      videos={videos}
      lang={lang}
      changeLang={changeLang}
    />
  )
}
