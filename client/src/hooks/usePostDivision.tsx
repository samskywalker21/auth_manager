import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { DivisionInsert } from '../types';

const usePostDivision = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationKey: ['division'],
		mutationFn: async (data: DivisionInsert) => {
			return await axios.post(
				`${import.meta.env.VITE_API_URL}/division/insert`,
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
				message: 'Division has been added.',
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

export default usePostDivision;
