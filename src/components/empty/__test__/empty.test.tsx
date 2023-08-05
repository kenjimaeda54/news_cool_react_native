import { render } from '@/utils/test-utils'
import Empty from '../Empty'

describe('Empty', () => {
  it('should show the app Empty', () => {
    expect(render(<Empty />)).toBeTruthy
  })
})
