import ThemeProvider from './theme/ThemeProvider';
import { Outlet } from '@tanstack/react-router';
import { Container } from '@mantine/core';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Container fluid m={0} p={0}>
            <Outlet />
          </Container>
        </ThemeProvider>
        <TanStackRouterDevtools initialIsOpen={false} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
