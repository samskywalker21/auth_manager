import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetSystemsPaginated = (page?: number, search?: string) => {
	const query = useQuery({
		queryKey: ['systems', page],
		queryFn: async () => {
			let qstring = `${import.meta.env.VITE_API_URL}/system/paginated?`;
			if (page) {
				qstring = qstring + `page=${page}`;
			}

			const testSearch = search?.trim();

			if (testSearch) {
				qstring = qstring + `&search=${search}`;
			}

			return await axios.get(qstring, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});
		},
		placeholderData: keepPreviousData,
	});

	return query;
};

export default useGetSystemsPaginated;
