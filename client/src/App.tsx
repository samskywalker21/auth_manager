import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ThemeComponent from './components/ThemeComponent';

const queryClient = new QueryClient();

const App = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeComponent>
					<Outlet />
					<ReactQueryDevtools initialIsOpen={false} />
					<TanStackRouterDevtools initialIsOpen={false} />
				</ThemeComponent>
			</QueryClientProvider>
		</>
	);
};

export default App;
