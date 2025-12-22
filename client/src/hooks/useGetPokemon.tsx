import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetPokemon = (id: number) => {
	const query = useQuery({
		queryKey: ['pokemon', id],
		queryFn: async () => {
			return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		},
		retry: false,
	});

	return query;
};

export default useGetPokemon;
