import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetDivisions = () => {
	const query = useQuery({
		queryKey: ['divisions'],
		queryFn: async () => {
			return await axios.get(`${import.meta.env.VITE_API_URL}/division/all`, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});
		},
	});

	return query;
};

export default useGetDivisions;
