import { Lang } from '../../types'
import { MotionComicViewerComponent } from './motion-comic-viewer'

type Props = {
  comicId: number
  episode: number
  lang: Lang
  inFullScreen: boolean
  setInFullScreen: (inFullScreen: boolean) => void

  setLang: (lang: Lang) => void
}

export const MotionComicViewer = ({
  comicId,
  episode,
  lang,
  inFullScreen,
  setInFullScreen,
  setLang,
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
      inFullScreen={inFullScreen}
      setInFullScreen={setInFullScreen}
      setLang={setLang}
    />
  )
}
