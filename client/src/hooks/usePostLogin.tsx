import { notifications } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';

const usePostLogin = () => {
	const navigate = useNavigate({ from: '/' });

	const mutate = useMutation({
		mutationFn: async (credentials: { username: string; password: string }) => {
			return await axios.post(
				`${import.meta.env.VITE_API_URL}/auth/login`,
				credentials,
			);
		},
		onSuccess: ({ data }) => {
			sessionStorage.setItem('access_token', data.access_token);
			notifications.show({
				title: 'Success!',
				message: 'Redirecting to the Home Page.',
			});
			navigate({ to: '/dashboard' });
		},
		onError: () => {
			notifications.show({
				title: 'Error!',
				message: 'Invalid credentials.',
				color: 'red',
			});
		},
	});

	return mutate;
};

export default usePostLogin;
