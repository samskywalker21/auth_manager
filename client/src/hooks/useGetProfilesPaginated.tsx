import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetProfilesPaginated = (
	page?: number,
	search?: string,
	limit?: number,
) => {
	const query = useQuery({
		queryKey: ['profiles', page, search, limit],
		queryFn: async () => {
			let queryParams = '?';
			if (page) {
				queryParams = queryParams + `page=${page}&`;
			}
			if (search) {
				queryParams = queryParams + `search=${search}&`;
			}
			if (limit) {
				queryParams = queryParams + `limit=${limit}`;
			}
			return axios.get(
				`${import.meta.env.VITE_API_URL}/profile/page/${queryParams}`,
				{
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
				},
			);
		},
		placeholderData: keepPreviousData,
	});

	return query;
};

export default useGetProfilesPaginated;
