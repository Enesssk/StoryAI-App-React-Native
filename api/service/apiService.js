import apiClient from '../Client';
import { getMessagesEndpoint } from '../Endpoint';


export const getStory = async (contents) => {
  try {
    const response = await apiClient.post(getMessagesEndpoint, {
        contents: contents
    })

    const rawText = response.data.candidates[0].content.parts[0].text
    const cleanedText = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
    const parsed = JSON.parse(cleanedText)

    return parsed.story

  } catch (err) {
     throw err
  }

}