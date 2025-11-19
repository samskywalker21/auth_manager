import { Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
        <TanStackRouterDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
