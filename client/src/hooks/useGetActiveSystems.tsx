import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetActiveSystems = () => {
	const query = useQuery({
		queryKey: ['active_systems'],
		queryFn: async () => {
			return axios.get(`${import.meta.env.VITE_API_URL}/system/active`, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});
		},
	});

	return query;
};

export default useGetActiveSystems;
