import { render } from '@/utils/test-utils'
import ListExploreCategory from '../ListExploreCategory'
import { Text } from 'react-native'
import { ConstantsUtils } from '@/utils/constants'

describe('ListExploreCategory', () => {
  const data = {
    title: 'Business',
    uriImage:
      'https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  }

  //tem que mockar o Apparence do react native
  //olha o jestsSetupFile.js
  it('should show title', () => {
    const { getByText } = render(
      <ListExploreCategory
        uriImage={data.uriImage}
        title={<Text>{data.title}</Text>}
      />
    )
    const text = getByText('Business')

    expect(text).toBeDefined()
  })

  it('should show image', () => {
    const { getByTestId } = render(
      <ListExploreCategory
        uriImage={data.uriImage}
        title={<Text>{data.title}</Text>}
      />
    )
    const image = getByTestId(ConstantsUtils.testIdListExplore)

    expect(image.props.source.uri).toEqual(
      'https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    )
  })
})
