import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
	focusRing: 'auto',
	white: '#F7F7F7',
	black: '#1A1A1D',
	primaryColor: 'green',
	autoContrast: true,
	luminanceThreshold: 0.2,
});

const ThemeComponent = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<MantineProvider theme={theme}> {children}</MantineProvider>
		</>
	);
};

export default ThemeComponent;
