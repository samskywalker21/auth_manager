import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetProfile = (id?: number) => {
	const query = useQuery({
		queryKey: ['profile', id],
		queryFn: async () => {
			return await axios.get(
				`${import.meta.env.VITE_API_URL}/auth/get_profile`,
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

export default useGetProfile;
