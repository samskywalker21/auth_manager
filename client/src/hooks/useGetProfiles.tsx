import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetProfiles = () => {
	const query = useQuery({
		queryKey: ['profiles'],
		queryFn: async () => {
			return axios.get(`${import.meta.env.VITE_API_URL}/profile/all`, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});
		},
	});

	console.log(query.data?.data);

	return query;
};

export default useGetProfiles;
