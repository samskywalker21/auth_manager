import { notifications } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';

const usePostLogout = () => {
	const navigate = useNavigate({ from: '/dashboard' });

	const mutate = useMutation({
		mutationFn: async () => {
			return await axios.post(
				`${import.meta.env.VITE_API_URL}/auth/logout`,
				undefined,
				{
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
				},
			);
		},
		onSuccess: () => {
			sessionStorage.removeItem('access_token');
			notifications.show({
				title: 'Success!',
				message: 'Redirecting to the Login Page.',
			});
			navigate({ to: '/' });
		},
		onError: () => {
			notifications.show({
				title: 'Opppsss!',
				message: 'Something went wrong.',
			});
		},
	});

	return mutate;
};

export default usePostLogout;
