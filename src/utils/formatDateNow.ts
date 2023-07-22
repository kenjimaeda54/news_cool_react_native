import { formatDistanceToNow } from 'date-fns'

export default function formatDateNow(date: string) {
  const newDate = new Date(date)
  return formatDistanceToNow(newDate)
}
