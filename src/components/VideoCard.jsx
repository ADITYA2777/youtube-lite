import React from 'react'
import { Link } from 'react-router-dom'
import VideoLength from '../shared/VideoLength';

const VideoCard = ({video}) => {
    return <Link to={`/video/${video.videoId}`}>
        <div className="flex flex-col mb-8">
            <div className="relative h-48  md:h-[40] md:rounded-lg overflow-hidden">
                <img className='h-full w-full  object-cover'
                    src={video?.thumbnails?.[0]?.url}
                />
                {video?.lengthSeconds && (
                    <VideoLength time={ video?.lengthSeconds} />
                )}
            </div>
            <div className='flex text-white mt-3 '>
                <div className='flex items-start '>
                    <div className='flex h-9 w-9 rounded-full overflow-hidden'>
                        <img className='h-full w-full object-cover'
                            src={video?.author?.avatar[0]?.url} />
                    </div>
             </div>

            </div>
      </div>
  </Link>;
}

export default VideoCard