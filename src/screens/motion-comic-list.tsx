import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, View, Box, FlatList, List, Pressable } from 'native-base'
import { RootStackParamList } from '../types'

export default function MotionComicListScreen() {
  const episodes = [1, 2]
  const route = useRoute<RouteProp<RootStackParamList, 'MotionComicList'>>()
  const comic = route.params

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View flex={1} backgroundColor="#fff" alignItems="center">
      <Text my={4} fontSize={'lg'}>
        {comic.name}
      </Text>
      <Image
        resizeMode="contain"
        source={{
          uri: comic.image
        }}
        alt="Card Image"
        size="xl"
        w={'80%'}
      />

      <Box my={8} width={'80%'}>
        <FlatList
          data={episodes}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate('MotionComicDetail', {
                  comic,
                  episode: item
                })
              }
            >
              <List>
                <Text pl={4}>Episode {item}</Text>
              </List>
            </Pressable>
          )}
        />
      </Box>

      <StatusBar style="auto" />
    </View>
  )
}
