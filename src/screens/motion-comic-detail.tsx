import * as ScreenOrientation from 'expo-screen-orientation'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { View, Text, List, Box } from 'native-base'
import { useCallback, useEffect, useState } from 'react'
import { MotionComicViewer } from '../components/motion-comic-viewer'
import { Lang, RootStackParamList } from '../types'

export default function MotionComicDetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'MotionComicDetail'>>()
  const { comic, episode } = route.params
  const [lang, setLang] = useState<Lang>('ja')
  const [inFullScreen, setInFullScreen] = useState(false)

  const handleFullScreen = useCallback(() => {
    setInFullScreen(prev => !prev)
  }, [])

  const handleLangChange = useCallback((lang: Lang) => {
    setLang(lang)
  }, [])

  useEffect(() => {
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    }
  }, [])

  return (
    <View flex={1} backgroundColor="#fff" alignItems="center">
      <MotionComicViewer
        comicId={comic.id}
        episode={episode}
        lang={lang}
        inFullScreen={inFullScreen}
        handleFullScreen={handleFullScreen}
        handleLangChange={handleLangChange}
      />

      {inFullScreen || (
        <Box>
          <List>
            <Text my={3} fontSize="md" pl="4">
              {comic.name} 第{episode}話
            </Text>
          </List>
          <List>
            <Text my={2} p="4">
              物語の前年、1年生ばかりの掛川高校サッカー部は藤田東高校を破り、その中心選手で事実上監督も兼ねていた久保嘉晴はすでに伝説的な扱いを受けていた。
              田仲俊彦は久保に憧れて掛川高校へと進学しサッカー部へ入部、時を同じくして遠藤一美はマネージャーとなる。田仲とともに「掛西中トリオ」と呼ばれていた平松和広と白石健二も掛川高校へと進学していたが、それぞれの事情によりサッカー部には入部しなかった。神谷篤司をはじめとする2年生は「1年生は夏のインターハイ予選に出さない」と宣告すると、不公平に感じた1年生は2年生に紅白戦を挑んだ。戦力差は明らかであったが、平松・白石の途中加入により2年生チーム1点リードの接線で終盤を迎える。終了直前に掛西中トリオが必殺の「トリプルカウンターアタック」を仕掛けたが、神谷に防がれてそのまま試合を終えた。この結果により実力を認め、1年生の試合起用を約束する。
            </Text>
          </List>
        </Box>
      )}

      <StatusBar style="auto" />
    </View>
  )
}
