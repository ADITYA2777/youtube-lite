import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { context } from "../context/contextApi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { fetchDataFromApi } from "../utils/api";
import ReactPlayer from "react-player";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();
  const { setloading } = useContext(context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h")
    fetchVideoDetialApi();
    fetchRelatedApi();
  }, [id]);
  
  const fetchVideoDetialApi = () => {
    setloading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setloading(false)
    })
  }

  const fetchRelatedApi = () => {
    setloading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
      setloading(false);
    });
  }

  return (
    <div className="flex flex-row justify-center h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div
          className="flex flex-col lg:w-[calc100%-350px] xl:w-[calc100%-400px] px-4 py-3
        lg:py-6 overflow-y-auto"
        >
          <div
            className="h-[200px] md:h-[400px]  lg:h-[400px] xl:h-[550px] ml-[-16px]
          lg:ml-0 mr-[-16px] lg:mr-0"
          >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{backgroundColor:"#000000"}}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-1">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4 ">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img className="h-full  object-cover w-full"
                    src={ video?.author?.avatar[0]?.url} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
