import axios from "axios";

const API_KEY = "N7uR7NdufxlAmrbGidiTLbgOF3PoEaplwGNLlwDeJZTHtl2Er9MGrlx2"; // replace with your Pexels API key

export interface PexelsPhoto {
  id: number;
  url: string;
  photographer: string;
  photographerUrl: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
  link: string;
}

interface SearchResponse {
  photos: PexelsPhoto[];
}

export async function searchPhotos(
  query: string,
  page: number,
  perPage: number
): Promise<PexelsPhoto[]> {
  const response = await axios.get<SearchResponse>(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      query
    )}&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  return response.data.photos;
}

export async function fetchPhotoData(id: number) {
  const response = await axios.get(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: API_KEY,
    },
  });

  return response.data;
}
