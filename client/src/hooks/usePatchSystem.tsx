import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { SystemsInsert } from '../types';

const usePatchSystem = (id: number) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationKey: ['system', id],
		mutationFn: async (data: SystemsInsert) => {
			return await axios.patch(
				`${import.meta.env.VITE_API_URL}/system/update/${id}`,
				data,
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
				message: 'System has been updated.',
			});
			queryClient.invalidateQueries({ queryKey: ['systems'] });
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

export default usePatchSystem;
