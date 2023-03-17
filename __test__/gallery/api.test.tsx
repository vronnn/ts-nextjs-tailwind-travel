import mockAxios from "@/__mocks__/axios";
import photoApi from "@/pages/api/photoApi";

describe("photoApi", () => {
  it("calls photoApi and return images data", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            id: 2014422,
            url: "https://www.pexels.com/photo/example",
            photographer: "vron",
            photographer_url: "https://www.pexels.com/@vron",
            src: {
              original: "https://images.pexels.com/photos/2014422/example",
              large2x:
                "https://images.pexels.com/photos/2014422/example?large2x",
              large: "https://images.pexels.com/photos/2014422/example?large",
              medium: "https://images.pexels.com/photos/2014422/example?medium",
              small: "https://images.pexels.com/photos/2014422/example?small",
              portrait:
                "https://images.pexels.com/photos/2014422/example?portrait",
              landscape:
                "https://images.pexels.com/photos/2014422/example?landscape",
              tiny: "https://images.pexels.com/photos/2014422/example?tiny",
            },
            alt: "A photo example",
          },
          {
            id: 2014423,
            url: "https://www.pexels.com/photo/example2",
            photographer: "vron2",
            photographer_url: "https://www.pexels.com/@vron2",
            src: {
              original: "https://images.pexels.com/photos/2014422/example2",
              large2x:
                "https://images.pexels.com/photos/2014422/example?large2x2",
              large: "https://images.pexels.com/photos/2014422/example?large2",
              medium:
                "https://images.pexels.com/photos/2014422/example?medium2",
              small: "https://images.pexels.com/photos/2014422/example?small2",
              portrait:
                "https://images.pexels.com/photos/2014422/example?portrait2",
              landscape:
                "https://images.pexels.com/photos/2014422/example?landscape2",
              tiny: "https://images.pexels.com/photos/2014422/example?tiny2",
            },
            alt: "A photo example2",
          },
        ],
      })
    );

    const images = await photoApi("test");

    expect(images).toEqual([
      {
        id: 2014422,
        url: "https://www.pexels.com/photo/example",
        photographer: "vron",
        photographer_url: "https://www.pexels.com/@vron",
        src: {
          original: "https://images.pexels.com/photos/2014422/example",
          large2x: "https://images.pexels.com/photos/2014422/example?large2x",
          large: "https://images.pexels.com/photos/2014422/example?large",
          medium: "https://images.pexels.com/photos/2014422/example?medium",
          small: "https://images.pexels.com/photos/2014422/example?small",
          portrait: "https://images.pexels.com/photos/2014422/example?portrait",
          landscape:
            "https://images.pexels.com/photos/2014422/example?landscape",
          tiny: "https://images.pexels.com/photos/2014422/example?tiny",
        },
        alt: "A photo example",
      },
      {
        id: 2014423,
        url: "https://www.pexels.com/photo/example2",
        photographer: "vron2",
        photographer_url: "https://www.pexels.com/@vron2",
        src: {
          original: "https://images.pexels.com/photos/2014422/example2",
          large2x: "https://images.pexels.com/photos/2014422/example?large2x2",
          large: "https://images.pexels.com/photos/2014422/example?large2",
          medium: "https://images.pexels.com/photos/2014422/example?medium2",
          small: "https://images.pexels.com/photos/2014422/example?small2",
          portrait:
            "https://images.pexels.com/photos/2014422/example?portrait2",
          landscape:
            "https://images.pexels.com/photos/2014422/example?landscape2",
          tiny: "https://images.pexels.com/photos/2014422/example?tiny2",
        },
        alt: "A photo example2",
      },
    ]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://api.pexels.com/v1/search?query=test&page=1&per_page=1",
      {
        headers: {
          Authorization:
            "N7uR7NdufxlAmrbGidiTLbgOF3PoEaplwGNLlwDeJZTHtl2Er9MGrlx2",
        },
      }
    );
  });
  it("returns error message if it fails to fetch", async () => {
    const message = new Error("Failed to fetch photos data");
    mockAxios.get.mockImplementationOnce(() => Promise.reject(message));

    await expect(photoApi("test")).rejects.toThrow(message);
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
  });
});
