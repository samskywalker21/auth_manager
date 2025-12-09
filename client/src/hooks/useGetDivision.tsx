import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetDivision = (id: number) => {
	const query = useQuery({
		queryKey: ['division', id],
		queryFn: async () => {
			return axios.get(`${import.meta.env.VITE_API_URL}/division/${id}`, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});
		},
	});

	return query;
};

export default useGetDivision;
