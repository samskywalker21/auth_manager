import '@mantine/core/styles.css';
import { MantineProvider, createTheme, localStorageColorSchemeManager } from '@mantine/core';

const theme = createTheme({
  focusRing: 'auto',
  fontSmoothing: true,
  white: '#FAF9F6',
  black: '#28282B',
  autoContrast: true,
  primaryColor: 'green',
  luminanceThreshold: 0.4,
});

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="auto"
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
