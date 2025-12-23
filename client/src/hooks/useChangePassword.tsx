import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { notifications } from '@mantine/notifications';

const useChangePassword = () => {
	const mutation = useMutation({
		mutationKey: ['password'],
		mutationFn: (data: {
			id: number;
			old_password: string;
			password: string;
		}) => {
			return axios.patch(
				`${import.meta.env.VITE_API_URL}/profile/change_password/${data.id}`,
				{ old_password: data.old_password, password: data.password },
				{
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
				},
			);
		},
		onSuccess() {
			notifications.show({
				title: 'Success!',
				message: 'Password has been updated.',
			});
			mutation.reset();
		},
		onError(error) {
			notifications.show({
				title: 'Error!',
				message: `Something went wrong. ${error.message}`,
				color: 'red',
			});
			mutation.reset();
		},
	});

	return mutation;
};

export default useChangePassword;
