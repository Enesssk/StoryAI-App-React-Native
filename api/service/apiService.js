import apiClient from '../client/Client';
import { getMessagesEndpoint, getStoryImagesEndpoint } from '../Endpoint';
import workerClient from '../client/WorkerClient';
import imageApiClient from '../client/WorkerClient';


export const getStory = async (contents) => {
  try {
    const response = await apiClient.post(getMessagesEndpoint, {
        contents: contents
    })

    const rawText = response.data.candidates[0].content.parts[0].text
    const cleanedText = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
    const parsed = JSON.parse(cleanedText)

    if (!Array.isArray(parsed.story)) {
      throw new Error("Story is not an array");
    }

    return parsed.story

  } catch (err) {
     throw err
  }
}

export const getStoryImages = async (prompt) => {
  try {
    const response = await imageApiClient.post(getStoryImagesEndpoint, {
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    })

    const url = response.data.data?.[0].url
    console.log("url", url)
    return url

  } catch (err) {
    console.log("🔥 AXIOS ERROR OBJECT:", err);
    throw err
  }
}