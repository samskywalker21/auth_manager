import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { notifications } from '@mantine/notifications';

const usePostLogin = () => {
	const mutate = useMutation({
		mutationFn: async (credentials: { username: string; password: string }) => {
			return await axios.post(
				`${import.meta.env.VITE_API_URL}/auth/login`,
				credentials,
			);
		},
		onSuccess: () => {
			notifications.show({
				title: 'Success!',
				message: 'Redirecting to the Home Page.',
			});
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
