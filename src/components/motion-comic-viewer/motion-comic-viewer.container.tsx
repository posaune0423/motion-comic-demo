import { MotionComicViewerComponent } from './motion-comic-viewer'

type Props = {
  comicId: number
}

export const MotionComicViewer = ({ comicId }: Props) => {
  const videos = ['https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4']
  return <MotionComicViewerComponent videos={videos} />
}
