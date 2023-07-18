import {useTheme} from '@emotion/react';
import {Platform, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Styles from './home.styles';
import useHomeViewModel from '../../../view_models/useHomeViewModel';

export default function HomeScreen() {
  const {inputHeight, handleHeightInput, valueInput, setValueInput} =
    useHomeViewModel();
  const {colors, fonts} = useTheme();

  return (
    <Styles.Container>
      <Styles.WrapViewInput height={inputHeight + 7}>
        <Styles.IconSearch name="search" size={15} color={colors.black100} />
        <Styles.InputSearch
          height={inputHeight}
          multiline
          value={valueInput}
          style={{
            paddingVertical: Platform.OS === 'android' ? 0 : 5,
          }}
          onChangeText={setValueInput}
          onContentSizeChange={content =>
            handleHeightInput(content.nativeEvent.contentSize.height + 7)
          }
          placeholder="Pesquise uma notícia"
        />
      </Styles.WrapViewInput>
      <Styles.Title>Noticias Quentes</Styles.Title>
    </Styles.Container>
  );
}
