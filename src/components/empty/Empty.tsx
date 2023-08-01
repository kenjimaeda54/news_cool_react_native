import FastImage from 'react-native-fast-image'
import * as Styles from './empty.styles'

export default function Empty() {
  return (
    <Styles.Container>
      <Styles.Image
        source={require('../../assets/images/search.png')}
        resizeMode='cover'
        resizeMethod='scale'
      />
      <Styles.Title>We found nothing</Styles.Title>
    </Styles.Container>
  )
}
