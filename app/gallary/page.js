import Image from "next/image";
import Link from "next/link";
import { photos } from "./photos";

const GalleryPage = () => {
  return (
    <div className="p-10">
      <h2 className="my-5 text-3xl text-orange-500">Gallery</h2>

      <div className="grid grid-cols-4 gap-5">
        {photos.map((photo) => (
          <Link key={photo.id} href={`/gallary/${photo.id}`}>
            <Image src={photo.url} alt={photo.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default GalleryPage;
