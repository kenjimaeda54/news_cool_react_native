import { render } from '@/utils/test-utils'
import CardTopHeadlines from '../CardTopHeadlines'
import { ConstantsUtils } from '@/utils/constants'

describe('CardTopHeadline', () => {
 
  it('should render image correct if not is null', () => {
    const data = {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: null,
      title:
        'Microsoft will charge businesses $30 per user for its 365 AI Copilot - Engadget',
      description:
        'At the Microsoft Inspire partner event today, the Windows maker announced pricing for its AI-infused Copilot for Microsoft 365.',
      url: 'https://www.engadget.com/microsoft-will-charge-businesses-30-per-user-for-its-365-ai-copilot-153042654.html',
      urlToImage:
        'https://s.yimg.com/uu/api/res/1.2/v6_iVgu1J1TSDWG5LoPNOw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/8ad97820-24c1-11ee-8ef3-4952b6077bf1.cf.jpg',
      publishedAt: '2023-07-18T15:31:59Z',
      content:
        'At the Microsoft Inspire partner event today, the Windows maker announced pricing for its AI-infused Copilot for Microsoft 365. The suite of contextual artificial intelligence tools, the fruit of the… [+2469 chars]',
    }
  

    const { getByTestId } = render(<CardTopHeadlines data={data} />)
    const element = getByTestId(
      ConstantsUtils.testIdImageTopCardTopHeadlines
    )
    expect(element.props.source.uri).toEqual(
      'https://s.yimg.com/uu/api/res/1.2/v6_iVgu1J1TSDWG5LoPNOw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/8ad97820-24c1-11ee-8ef3-4952b6077bf1.cf.jpg'
    )
  })

  it('should render string empty if image is null',() =>{
    const data = {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: null,
      title:
        'Microsoft will charge businesses $30 per user for its 365 AI Copilot - Engadget',
      description:
        'At the Microsoft Inspire partner event today, the Windows maker announced pricing for its AI-infused Copilot for Microsoft 365.',
      url: 'https://www.engadget.com/microsoft-will-charge-businesses-30-per-user-for-its-365-ai-copilot-153042654.html',
      urlToImage:null,
      publishedAt: '2023-07-18T15:31:59Z',
      content:
        'At the Microsoft Inspire partner event today, the Windows maker announced pricing for its AI-infused Copilot for Microsoft 365. The suite of contextual artificial intelligence tools, the fruit of the… [+2469 chars]',
    }
    const { getByTestId } = render(<CardTopHeadlines data={data} />)
    const element = getByTestId(
      ConstantsUtils.testIdImageTopCardTopHeadlines
    )
    expect(element.props.source.uri).toEqual('')

  })
})
