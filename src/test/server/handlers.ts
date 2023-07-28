import { mockTopHeadlines } from '@/mock/topHeadlines'
import { ConstantsUtils } from '@/utils/constants'
import { rest } from 'msw'

export const handlers = [
  rest.get(
    `${ConstantsUtils.baseUrlApi}/top-headlines`,
    (_, resp, ctx) => {
      return resp(ctx.status(200), ctx.json(mockTopHeadlines))
    }
  ),
]
