import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetSections = (status: 'A' | 'I') => {
  const sections = useQuery({
    queryKey: ['sections', status],
    queryFn: async () => {
      const data = await axios
        .get(`${import.meta.env.VITE_API_URL}register/sections`)
        .then((response) => response.data)
        .catch((error) => error);
      return data;
    },
  });

  return sections;
};

export default useGetSections;
