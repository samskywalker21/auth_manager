import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import axios from 'axios';

const useDeleteRole = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationKey: ['roles'],
		mutationFn: async (id: number) => {
			return await axios.delete(
				`${import.meta.env.VITE_API_URL}/profile/roles/delete`,
				{
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
					data: { id },
				},
			);
		},
		onSuccess() {
			notifications.show({
				title: 'Success!',
				message: 'Role has been removed.',
			});
			queryClient.invalidateQueries({ queryKey: ['roles'] });
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

export default useDeleteRole;
