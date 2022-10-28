import { useState } from 'react'
import { MotionComicViewerComponent } from './motion-comic-viewer'

type Props = {
  comicId: number
  lang: 'ja' | 'en' | 'ch'
  changeLang: (lang: 'ja' | 'en' | 'ch') => void
}

export const MotionComicViewer = ({ comicId, lang, changeLang }: Props) => {
  const videos = [
    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  ]



  return (
    <MotionComicViewerComponent
      videos={videos}
      lang={lang}
      changeLang={changeLang}
    />
  )
}
