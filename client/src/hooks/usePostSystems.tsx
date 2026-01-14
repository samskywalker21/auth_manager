import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { SystemsInsert } from '../types';
import axios from 'axios';

const usePostSystems = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (data: SystemsInsert) => {
			return await axios.post(
				`${import.meta.env.VITE_API_URL}/system/insert`,
				data,
				{
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
				},
			);
		},
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['systems'] });
			notifications.show({
				title: 'Success!',
				message: 'System has been added.',
			});
			mutation.reset();
		},
		onError(error) {
			notifications.show({
				title: 'Oops!',
				message: `Something went wrong. ${error}`,
				color: 'red',
			});
			mutation.reset();
		},
	});

	return mutation;
};

export default usePostSystems;
