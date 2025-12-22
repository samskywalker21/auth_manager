import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { ProfileEdit } from '../types';

const usePatchProfile = (id: number) => {
	const queryClient = useQueryClient();

	const mutate = useMutation({
		mutationKey: ['profile', id],
		mutationFn: async (profile: Partial<ProfileEdit>) => {
			return await axios.patch(
				`${import.meta.env.VITE_API_URL}/profile/update/${id}`,
				profile,
				{
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
				},
			);
		},
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profiles'] });
			notifications.show({
				title: 'Success!',
				message: 'Profile has been updated.',
			});
			mutate.reset();
		},
		onError(error) {
			notifications.show({
				title: 'Oops!',
				message: `Something went wrong. ${error}`,
				color: 'red',
			});
			mutate.reset();
		},
	});

	return mutate;
};

export default usePatchProfile;
