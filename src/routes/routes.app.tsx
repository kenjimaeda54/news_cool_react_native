import { NavigationModel } from '@/models/navigation_model'
import DetailsScreen from '@/screens/details/DetailsScreen'
import HomeScreen from '@/screens/home/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator } =
  createNativeStackNavigator<NavigationModel>()

export default function RoutesApp() {
  return (
    <Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
      }}>
      <Screen component={HomeScreen} name='home' />
      <Screen component={DetailsScreen} name='details' />
    </Navigator>
  )
}
