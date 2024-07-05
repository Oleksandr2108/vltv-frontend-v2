
import axios from 'axios';

export async function getMetaTags(pageId, lang) {
  try {
    const response = await axios.get(
      `https://vl-tv.com/backend/pages/${pageId}/?lang=${lang || 'en'}`,
      {
        withCredentials: true,
      }
    );
    return response.data[0];
  } catch (error) {
    console.error('Error fetching meta data:', error);
    return null;
  }
}
