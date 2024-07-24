import { GalleryImage, useGalleryData } from "@/lib/useGalleryData";
import { useEffect, useState } from "react";
import "./style.css";

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
    setImages(images.slice().reverse());
    setIsReversed(!isReversed);
  };

  return (
    <div className="gallery-section">
      <h1>Web Developer Gallery</h1>

      <div className="gallery">
        {images.map((image, index) => {
          const classIndex = isReversed ? images.length - index : index + 1;
          return (
            <div key={index} className={`image-container img${classIndex}`}>
              <img src={`/img/${image.filename}`} alt={image.altText} />
            </div>
          );
        })}
      </div>
      <button className="button-sort" onClick={handleReverse}>
        Sort
        <img
          src={isReversed ? "/img/IconUp.svg" : "/img/IconDown.svg"}
          alt="Sort Icon"
        />
      </button>
    </div>
  );
};

export default Gallery;
