jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: () => null,
}))

jest.mock('react-native/Libraries/Utilities/Appearance', () => ({
  useColorScheme: 'dark',
  getColorScheme: () => 'dark',
}))
