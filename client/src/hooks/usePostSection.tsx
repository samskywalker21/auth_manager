import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { SectionInsert } from '../types';
import { notifications } from '@mantine/notifications';

const usePostSection = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationKey: ['section'],
		mutationFn: async (data: SectionInsert) => {
			return await axios.post(
				`${import.meta.env.VITE_API_URL}/section/insert`,
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
				message: 'Section has been added',
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

export default usePostSection;
