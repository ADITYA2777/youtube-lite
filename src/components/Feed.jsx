// import React, { useContext, useEffect } from 'react'
// import LeftNav from './LeftNav'
// import VideoCard from './VideoCard'
// import { context } from '../context/contextApi'

// const Feed = () => {

//   const { loading, searchResults } = useContext(context);

//   useEffect(() => {
//     document.getElementById("root").classList.remove("custome-h")
//   },[])
//   return (
//     <div className="flex flex-row h-[calc(100%-56px)]">
//       <LeftNav />
//       <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
//         <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
//          gap-4 p-5">
//           {!loading &&
//                     searchResults.map((item) => {
//               if (item.type !== "video") return false
//                       return (
//                         <VideoCard
//                           key={item?.video?.videoId}
//                           video={item?.video}/>
//                       );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Feed

import React, { useContext, useEffect } from "react";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import { context } from "../context/contextApi";

const Feed = () => {
  const { searchResults } = useContext(context);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.classList.remove("custome-h");
    }
  }, []);

  return (
    <div className="flex flex-row h-[calc(100% - 56px)]">
      <LeftNav />
      <div className="grow w-[calc(100% - 240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {Array.isArray(searchResults) ? (
           searchResults.map((item) => {
              if (item.type === "video") {
                return (
                  <VideoCard key={item?.video?.videoId} video={item?.video} />
                );
              }
              return null; // or an alternative rendering or action
            })
          ) : (
            <p>No video results available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;

