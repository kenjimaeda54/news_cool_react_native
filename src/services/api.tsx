import axios from 'axios'
import { ConstantsUtils } from '@/utils/constants'

export default axios.create({
  baseURL: ConstantsUtils.baseUrlApi,
})
