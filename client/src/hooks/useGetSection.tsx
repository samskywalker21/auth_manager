import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetSection = (id: number) => {
	const query = useQuery({
		queryKey: ['section', id],
		queryFn: async () => {
			return axios.get(`${import.meta.env.VITE_API_URL}/section/${id}`, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});
		},
	});

	return query;
};

export default useGetSection;
