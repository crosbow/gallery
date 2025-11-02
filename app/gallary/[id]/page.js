import Image from "next/image";
import { photos } from "../photos";

const ImagePage = ({ params }) => {
  const photo = photos.find((p) => p.id === Number(params.id));

  return (
    <div className="p-20 flex justify-center">
      <Image alt="photo" src={photo.url} height={200} width={200} />
    </div>
  );
};
export default ImagePage;
