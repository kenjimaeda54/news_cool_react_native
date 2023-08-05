import { fireEvent, render } from '@/utils/test-utils'
import ListExplore from '../components/list_explore/ListExplore'
import { ConstantsUtils } from '@/utils/constants'
import { dataCategories } from '@/mock/data_explore'

describe('ListExplore', () => {
  const mockHandleSelectedCategory = jest.fn()

  it('should select category by title when clicking on the ListExplore', () => {
    const { getAllByTestId } = render(
      <ListExplore
        handleSelectedCategory={mockHandleSelectedCategory}
        color='blue'
      />
    )
    const button = getAllByTestId(ConstantsUtils.testIdItemExplore)
    fireEvent.press(button[0], mockHandleSelectedCategory)
    expect(mockHandleSelectedCategory).toBeCalled()
  })

  it('should show   ItemExplore component title egual  to the Flatlist data', () => {
    const { getByText } = render(
      <ListExplore
        handleSelectedCategory={mockHandleSelectedCategory}
        color='blue'
      />
    )
    const text = getByText(dataCategories[0].title)
    expect(text).toBeDefined()
  })
})
