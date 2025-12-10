import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { DivisionEdit } from '../types';

const usePatchDivision = (id: number) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationKey: ['division', id],
		mutationFn: async (data: DivisionEdit) => {
			return await axios.patch(
				`${import.meta.env.VITE_API_URL}/division/update/${id}`,
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
				message: 'Division has been updated.',
			});
			queryClient.invalidateQueries({ queryKey: ['divisions'] });
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

export default usePatchDivision;
