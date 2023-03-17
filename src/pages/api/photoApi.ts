import axios from "@/__mocks__/axios";

const API_KEY = "N7uR7NdufxlAmrbGidiTLbgOF3PoEaplwGNLlwDeJZTHtl2Er9MGrlx2";

export default async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        query
      )}&page=1&per_page=1`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch photos data");
  }
};
