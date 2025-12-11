import { notifications } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { RegistrationData } from '../types';

const usePostRegister = () => {
	const mutation = useMutation({
		mutationFn: async (registration: RegistrationData) => {
			return axios.post(
				`${import.meta.env.VITE_API_URL}/register`,
				registration,
			);
		},
		onSuccess: () => {
			notifications.show({
				title: 'Success!',
				message:
					'Registration successful. Please contact ICTU for activation of account',
			});
		},
		onError: (error) => {
			notifications.show({
				title: 'Error!',
				message: `Something went wrong. ${error}`,
				color: 'red',
			});
		},
	});

	return mutation;
};

export default usePostRegister;
