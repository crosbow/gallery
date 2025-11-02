import Modal from "@/app/components/Modal";
import { photos } from "@/app/gallary/photos";
import Image from "next/image";

const ImagePage = ({ params }) => {
  const photo = photos.find((p) => p.id === Number(params.id));

  return (
    <Modal>
      <Image alt="photo" src={photo.url} height={200} width={200} />
    </Modal>
  );
};
export default ImagePage;
