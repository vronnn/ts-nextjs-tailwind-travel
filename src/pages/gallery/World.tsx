import Link from "next/link";
import { useState, useEffect } from "react";
import { searchPhotos, PexelsPhoto } from "../api/api";
import Photo from "./Photo";
import { AiOutlineArrowDown } from "react-icons/ai";

interface Props {
  query: string;
}

export default function World({ query }: Props) {
  const [photos, setPhotos] = useState<PexelsPhoto[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      const newPhotos = await searchPhotos(query, page, 18);
      if (page === 1) {
        setPhotos(newPhotos);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      }
    }
    fetchData();
  }, [query, page]);

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  if (!photos) {
    return <div>Loading...</div>;
  }

  return (
    <section className="">
      <div className="flex justify-center items-center min-h-[5rem] pt-10 box-border">
        <h1 className="text-center text-5xl font-semibold text-gray-700">
          {query}
        </h1>
      </div>
      <div className="flex justify-center items-center min-h-[6rem] gap-x-1">
        <button className="px-4 py-2 bg-gray-700 text-gray-100 rounded-md mr-4">
          Photos
        </button>
        <button className="px-4 py-2">Videos</button>
        <button className="px-4 py-2">Leaderboard</button>
      </div>
      <div className="flex flex-wrap justify-center gap-8 box-border">
        {photos.map((photo) => (
          <div key={photo.id} className="w-[28%]">
            <Link href={`/gallery/${photo.id}`}>
              <Photo photo={photo} />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center min-h-[6rem]">
        <div>
          <button
            className="px-4 py-2 text-gray-700 text-lg font-semibold flex items-center gap-x-2"
            onClick={handleLoadMore}
          >
            Load More
            <AiOutlineArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}
