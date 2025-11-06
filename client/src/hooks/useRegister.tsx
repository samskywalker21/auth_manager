import { useMutation } from '@tanstack/react-query';
import type { RegisterProfileType } from '../types/types';
import axios from 'axios';

const useRegister = () => {
  const mutation = useMutation({
    mutationFn: async (newProfile: RegisterProfileType) => {
      const data = await axios
        .post(`${import.meta.env.VITE_API_URL}register`, newProfile)
        .then((response) => response)
        .catch((error) => error);
      return data;
    },
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });

  return mutation;
};

export default useRegister;
