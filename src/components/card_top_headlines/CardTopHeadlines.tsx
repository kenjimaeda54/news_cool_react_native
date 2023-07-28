import * as Styles from './cardTopHeadlines.style'
import { Dimensions, TouchableOpacityProps } from 'react-native'
import FastImage from 'react-native-fast-image'
import formatDateNow from '@/utils/formatDateNow'
import { ConstantsUtils } from '@/utils/constants'
import { ArticlesModel } from '@/models/TopHeadlinesModel'

interface ICardTopHeadlines extends TouchableOpacityProps {
  data: ArticlesModel
}

const { width } = Dimensions.get('screen')

export default function CardTopHeadlines({
  data,
  ...rest
}: ICardTopHeadlines) {
  return (
    <Styles.Container
      {...rest}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      }}>
      <Styles.WrapContent>
        <Styles.TopContent>
          <Styles.Category>{data.source.name}</Styles.Category>
          <Styles.Date>{formatDateNow(data.publishedAt)}</Styles.Date>
        </Styles.TopContent>
        <Styles.Title numberOfLines={3}>{data.title}</Styles.Title>
      </Styles.WrapContent>

      <Styles.ImageWrap>
        <Styles.ImageTop
          testID={ConstantsUtils.testIdImageTopCardTopHeadlines}
          source={{
            uri: data.urlToImage ?? '',
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </Styles.ImageWrap>
    </Styles.Container>
  )
}
