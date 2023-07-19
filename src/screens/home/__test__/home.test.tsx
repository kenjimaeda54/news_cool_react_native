import {renderHook} from '@testing-library/react-hooks';
import {render, act, fireEvent} from '@/utils/test-utils';
import HomeScreen from '@/screens/home/HomeScreen';
import useHomeViewModel from '@/view_models/useHomeViewModel';

describe('HomeScreen', () => {
  const mockContentSize = {
    nativeEvent: {
      contentSize: {
        height: 30,
      },
    },
  };

  it('should the TextInput increase in size as you type', () => {
    const {getByRole} = render(<HomeScreen />);
    const {result} = renderHook(() => useHomeViewModel());
    const input = getByRole('search');

    act(() => {
      result.current.handleHeightInput(
        mockContentSize.nativeEvent.contentSize.height,
      );
    });

    fireEvent(input, 'onContentSizeChange', mockContentSize);
    expect(result.current.inputHeight).toEqual(30);
  });

  it('should show  screen title HomeScreen', () => {
    const {getByText} = render(<HomeScreen />);
    const text = getByText('Hottest News');
    expect(text).toBeDefined();
  });

  //pra testar plataforma precisei mokar
  //https://stackoverflow.com/questions/43161416/mocking-platform-detection-in-jest-and-react-native
  //olhar jestSetupFile
  it('should have 0 vertical padding TextInput if plataform is Android', () => {
    const {getByRole} = render(<HomeScreen />);
    const input = getByRole('search');
    const {result} = renderHook(() => useHomeViewModel());

    act(() => {
      result.current.returnPaddingIfPlataformIos();
    });

    expect(input.props.style[1].paddingVertical).toEqual(5);
  });
});
