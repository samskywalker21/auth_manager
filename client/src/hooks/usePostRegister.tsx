import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { RegistrationData } from '../types';

const usePostRegister = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (registration: RegistrationData) => {
			return axios.post(
				`${import.meta.env.VITE_API_URL}/register`,
				registration,
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profiles'] });
			notifications.show({
				title: 'Success!',
				message:
					'Registration successful. Please contact ICTU for activation of account',
			});
		},
		onError: (error, context) => {
			notifications.show({
				title: 'Error!',
				message: `Something went wrong. ${error.message}`,
				color: 'red',
			});
			console.log(context);
		},
	});

	return mutation;
};

export default usePostRegister;
