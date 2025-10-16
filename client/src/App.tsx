import ThemeProvider from './theme/ThemeProvider';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
