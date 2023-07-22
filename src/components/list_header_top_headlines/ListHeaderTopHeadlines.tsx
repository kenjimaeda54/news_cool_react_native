import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ReactNode } from 'react'
import { View } from 'react-native'

interface IListHeader {
  input?: ReactNode
}

export default function ListHeader({ input }: IListHeader) {
  const { top } = useSafeAreaInsets()

  return <View style={{ marginTop: top + 20 }}>{input}</View>
}
