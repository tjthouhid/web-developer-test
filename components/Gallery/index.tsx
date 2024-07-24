import { GalleryImage, useGalleryData } from "@/lib/useGalleryData";
import { useEffect, useState } from "react";

const Gallery = () => {
  const { data } = useGalleryData();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    if (data) {
      setImages(data);
    }
  }, [data]);

  const handleReverse = () => {
    setImages((prevImages) => prevImages.slice().reverse());
    setIsReversed(!isReversed);
  };

  return (
    <div className="bg-white bg-opacity-50 max-w-screen-lg w-full my-12 mx-auto p-5 rounded-lg">
      <h1 className="text-4xl mb-5 font-light">Web Developer Gallery</h1>

      <div className="flex flex-wrap gap-2.5">
        {images.map((image, index) => {
          const classIndex = isReversed ? images.length - index : index + 1;
          let className = "";
          switch (classIndex) {
            case 1:
            case 2:
              className = "max-w-[150px] h-[150px]";
              break;
            case 3:
              className = "max-w-[280px] h-[150px]";
              break;
            case 4:
              className = "max-w-[320px] h-[150px]";
              break;
            case 5:
              className = "max-w-[240px] h-[150px]";
              break;
            case 6:
              className = "max-w-[280px] h-[150px]";
              break;
            case 7:
              className = "max-w-[230px] h-[150px]";
              break;
            case 8:
              className = "max-w-[150px] h-[150px]";
              break;
            default:
              break;
          }
          return (
            <div key={index} className={`overflow-hidden ${className}`}>
              <img
                src={`/img/${image.filename}`}
                alt={image.altText}
                className="w-full h-auto block"
              />
            </div>
          );
        })}
      </div>
      <button
        className="bg-white my-5 py-2.5 px-7 rounded-full text-sm flex items-center gap-2.5 border border-gray-300 cursor-pointer"
        onClick={handleReverse}
      >
        Sort
        <img
          src={isReversed ? "/img/IconUp.svg" : "/img/IconDown.svg"}
          alt="Sort Icon"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default Gallery;
