import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetSectionOptions = () => {
  const sections = useQuery({
    queryKey: ['section_options'],
    queryFn: async () => {
      const res = await axios
        .get(`${import.meta.env.VITE_API_URL}/register/sections`)
        .then((res) => res.data)
        .catch((error) => error);
      return res;
    },
  });

  return sections;
};

export default useGetSectionOptions;
