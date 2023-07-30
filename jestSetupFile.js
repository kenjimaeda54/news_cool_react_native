import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

export const mockNavigate = jest.fn()
export const mockBackNavigate = jest.fn()
export const uriWebViewJest =
  'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: () => null,
}))

jest.mock('react-native/Libraries/Utilities/Appearance', () => ({
  useColorScheme: 'dark',
  getColorScheme: () => 'dark',
}))

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: mockNavigate,
        goBack: mockBackNavigate,
      }
    },
    useRoute: () => {
      return {
        params: {
          uriWebView: uriWebViewJest,
        },
      }
    },
  }
})

//quando acontecer esse erro
////essa abordagem e para resulver este erro do jest
// Jest Failure - SyntaxError: Cannot use import statement outside a module

//precisa ignorar ele no package.json
//  "transformIgnorePatterns": [
//   "node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-webview)/)"
// ],

//repara que coloquei o react-native-webview
//porem deu erro de turbomodule então fiz esse mock

jest.mock(
  'react-native/Libraries/TurboModule/TurboModuleRegistry',
  () => {
    const turboModuleRegistry = jest.requireActual(
      'react-native/Libraries/TurboModule/TurboModuleRegistry'
    )
    return {
      ...turboModuleRegistry,
      getEnforcing: (name) => {
        if (name === 'RNCWebView') {
          return null
        }
        return turboModuleRegistry.getEnforcing(name)
      },
    }
  }
)

// jest.mock('react-native-safe-area-context', () => {
//   return {
//     mockSafeAreaContext,
//     useSafeAreaInsets() {
//       return {
//         top: 30,
//         bottom: 20,
//         left: 10,
//         right: 10,
//       }
//     },
//   }
// })
