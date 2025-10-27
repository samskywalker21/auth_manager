import ThemeProvider from './theme/ThemeProvider';
import { Outlet } from '@tanstack/react-router';
import { Container } from '@mantine/core';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Container fluid>
          <Outlet />
        </Container>
      </ThemeProvider>
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
