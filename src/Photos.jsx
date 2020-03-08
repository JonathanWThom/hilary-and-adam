import React, { useState } from "react";
import Carousel from "react-images";

const Photos = () => {
  const [currentImage] = useState(0);

  const importAll = (r) => {
    return r.keys().map(r);
  }

  const IMAGES = importAll(require.context('./images/website/', false, /\.(png|jpe?g|svg)$/));
  const PARSED_IMAGES = IMAGES.map(image => {
    const size = image.split(".jpg")[0].split(".")[0].slice(-2).split("");
    const link = `http://da8tipofuthml.cloudfront.net/${image.split("/")[3].split(".")[0]}.jpg`
    return { src: link, width: parseInt(size[0]), height: parseInt(size[1]) };
  })

  return (
    <div className="top-margin">
      <Carousel
        currentIndex={currentImage}
        views={PARSED_IMAGES.map(x => ({
          ...x,
          srcset: x.srcSet,
          caption: x.title
        }))}
      />
    </div>
  );
}

export default Photos;
