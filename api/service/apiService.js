import apiClient from '../Client';
import { getMessagesEndpoint } from '../Endpoint';


export const getStory = async (contents) => {
  try {
    const response = await apiClient.post(getMessagesEndpoint, {
        contents: contents
    })

    const story = response.data.candidates[0].content.parts[0].text
    return story
  } catch (err) {
    console.log("error", err)
  }

}