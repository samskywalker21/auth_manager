import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const HomePanel = () => {
	const query = useQuery({
		queryKey: ['is_admin'],
		queryFn: async () => {
			return axios.get(`${import.meta.env.VITE_API_URL}/auth/is_admin`, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});
		},
	});

	return <div>HomePanel</div>;
};

export default HomePanel;
