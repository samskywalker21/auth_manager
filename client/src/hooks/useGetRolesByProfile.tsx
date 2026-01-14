import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetRolesByProfile = (id: number) => {
	const query = useQuery({
		queryKey: ['roles', id],
		queryFn: async () => {
			return await axios.get(
				`${import.meta.env.VITE_API_URL}/profile/roles/${id}`,
				{
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
				},
			);
		},
	});

	return query;
};

export default useGetRolesByProfile;
