import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { SectionEdit } from '../types';
import { notifications } from '@mantine/notifications';

const usePatchSection = (id: number) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationKey: ['section', id],
		mutationFn: async (data: SectionEdit) => {
			return axios.patch(
				`${import.meta.env.VITE_API_URL}/section/update/${id}`,
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
				message: 'Section has been updated.',
			});
			queryClient.invalidateQueries({ queryKey: ['sections'] });
			mutation.reset();
		},
		onError(error) {
			notifications.show({
				title: 'Error!',
				message: `Something went wrong. ${error.message}`,
				color: 'red',
			});
		},
	});

	return mutation;
};

export default usePatchSection;
