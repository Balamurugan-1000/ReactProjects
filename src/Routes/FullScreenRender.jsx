import React, { useEffect } from "react";
import RenderFull from "../Components/RenderFull";
import Video from "../../API/Video";
const FullScreenRender = ({
  Fullscreendata,
  setNewMovie,
  newMovie,
  videoLink,
}) => {
  React.useEffect(() => {}, [Fullscreendata]);

  return (
    <div className=" bg-[#000]">
      {Fullscreendata && (
        <RenderFull
          item={Fullscreendata}
          videoLink={videoLink}
          setNewMovie={setNewMovie}
          newMovie={newMovie}
        />
      )}
    </div>
  );
};

export default FullScreenRender;
