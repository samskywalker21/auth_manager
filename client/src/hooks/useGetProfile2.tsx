import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetProfile2 = (id?: number) => {
	const query = useQuery({
		queryKey: ['profile', id],
		queryFn: async () => {
			return await axios.get(`${import.meta.env.VITE_API_URL}/profile/${id}`, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});
		},
	});

	return query;
};

export default useGetProfile2;
