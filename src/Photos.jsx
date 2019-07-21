import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import { IMAGES } from "./Images";

const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (event, obj) => {
    setCurrentImage(obj.index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const importAll = (r) => {
    return r.keys().map(r);
  }

  const IMAGES = importAll(require.context('./images/website/', false, /\.(png|jpe?g|svg)$/));
  const PARSED_IMAGES = IMAGES.map(image => {
    const size = image.split(".jpg")[0].split(".")[0].slice(-2).split("");
    return { src: image, width: parseInt(size[0]), height: parseInt(size[1]) };
  })

  return (
    <div className="top-margin">
      <Gallery photos={PARSED_IMAGES} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={PARSED_IMAGES.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Photos;
