import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchPhotoData, PexelsPhoto } from "../api/api";
import Details from "@/components/shared/Details";

export default function Gallery() {
  const router = useRouter();
  const { id } = router.query;
  const [photo, setPhoto] = useState<PexelsPhoto | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (typeof id === "string") {
        const photoData = await fetchPhotoData(parseInt(id));
        setPhoto(photoData);
      }
    }
    fetchData();
  }, [id]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-800 backdrop-brightness-50">
      <div className="bg-gray-200 flex justify-center items-center w-fit">
        <Details
          src={photo.src.large2x}
          photographer={photo.photographer}
          alt={photo.alt}
          photographer_url={photo.photographerUrl}
        />
      </div>
    </section>
  );
}
