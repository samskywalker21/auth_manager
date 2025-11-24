import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetSectionOptions = () => {
	const section = useQuery({
		queryKey: ['section_options'],
		queryFn: async () => {
			return await axios.get(
				`${import.meta.env.VITE_API_URL}/register/sections`,
			);
		},
	});

	return section;
};

export default useGetSectionOptions;
