import {useTheme} from '@emotion/react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  const {colors, fonts} = useTheme();

  return (
    <SafeAreaView style={{backgroundColor: colors.primary, flex: 1}}>
      <Text
        style={{color: colors.secondary, fontFamily: fonts.montserratMedium}}>
        Testando color scheme
      </Text>
    </SafeAreaView>
  );
}
