import * as Styles from './card_top_headline.styles'
import { Dimensions, TouchableOpacityProps } from 'react-native'
import FastImage from 'react-native-fast-image'
import formatDateNow from '@/utils/format_date_now'
import { ConstantsUtils } from '@/utils/constants'
import { ArticlesModel } from '@/models/top_headlines_model'

interface ICardTopHeadlines extends TouchableOpacityProps {
  data: ArticlesModel
}

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
