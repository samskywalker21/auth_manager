import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { RoleInsert } from '../types';

const usePostRole = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationKey: ['roles'],
		mutationFn: async (data: RoleInsert) => {
			return await axios.post(
				`${import.meta.env.VITE_API_URL}/profile/roles/insert`,
				data,
				{
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
				},
			);
		},
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['roles'] });
		},
	});

	return mutation;
};

export default usePostRole;
