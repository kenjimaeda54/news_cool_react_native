import { ArticlesModel } from '@/models/TopHeadlinesModel'
import * as Styles from './cardTopHeadlines.style'
import { Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'

interface ICardTopHeadlines {
  data: ArticlesModel
}

const { width } = Dimensions.get('screen')

export default function CardTopHeadlines({
  data,
}: ICardTopHeadlines) {
  return (
    <Styles.Container style={{ width: width * 0.6 }}>
      <Styles.ImageTop
        source={{
          uri: data.urlToImage ?? '',
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Styles.Title>{data.title}</Styles.Title>
    </Styles.Container>
  )
}
