export type MotionComic = {
  id: number
  name: string
  image: string
}

export type RootStackParamList = {
  Main: any
  MotionComicList: MotionComic
  MotionComicDetail: { comic: MotionComic; episode: number }
}

export type Lang = 'ja' | 'en'