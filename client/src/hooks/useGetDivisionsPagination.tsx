import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetDivisionsPagination = (page?: number, search?: string) => {
	const query = useQuery({
		queryKey: ['divisions', page, search],
		queryFn: async () => {
			let queryParams = '?';
			if (page) {
				queryParams = queryParams + `page=${page}&`;
			}
			if (search) {
				queryParams = queryParams + `search=${search}`;
			}

			return axios.get(
				`${import.meta.env.VITE_API_URL}/division/page${queryParams}`,
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

export default useGetDivisionsPagination;
