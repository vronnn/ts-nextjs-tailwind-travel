import axios from "axios";

const API_KEY = "N7uR7NdufxlAmrbGidiTLbgOF3PoEaplwGNLlwDeJZTHtl2Er9MGrlx2";

interface Photo {
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
