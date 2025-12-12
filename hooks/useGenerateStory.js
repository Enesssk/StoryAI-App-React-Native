import { useMutation } from "@tanstack/react-query"
import { getStory } from '../api/service/apiService';

export const useGenerateStory = (options = {}) => {
  return useMutation({ // describe it.
    mutationFn: getStory,
    ...options, //onSuccess, onError..
  })
}