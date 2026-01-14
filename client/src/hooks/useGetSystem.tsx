import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetSystem = (id: number) => {
	const query = useQuery({
		queryKey: ['system', id],
		queryFn: async () => {
			return await axios.get(`${import.meta.env.VITE_API_URL}/system/${id}`, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});
		},
	});

	return query;
};

export default useGetSystem;
