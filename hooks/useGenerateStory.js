import { useMutation } from "@tanstack/react-query"
import { getStory, getStoryImages } from '../api/service/apiService';

/*
export const useGenerateStory = (options = {}) => {
  return useMutation({ // describe it.
    mutationFn: getStory,
    ...options, //onSuccess, onError..
  })
}
 */

export const useGenerateStory = (options = {}) => {
  return useMutation({
    mutationFn: async (userContents) => {
      //create story
      const story = await getStory(userContents)

      //create image
      const storyWithImages = await Promise.all(
        story.map(async (item) => {
          const prompt =  `
              Children's book illustration.
              Soft pastel colors.
              Fairy tale book style.
              Scene:
              ${item.text}
              No text.
              Safe for children.
              `
          const image = await getStoryImages(prompt)

          return {
            ...item, // got story item
            image, // add image => story item
          }
        })
      )
      return storyWithImages
    },
    retry: 0, //hatada tekrar dene.
    networkMode: "online",
    ...options
  })
}

