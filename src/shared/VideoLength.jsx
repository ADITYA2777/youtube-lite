import moment from 'moment/moment'
import React from 'react'

const VideoLength = ({time}) => {
    const videoLengthInSeconds = moment().startOf("day").second(time).format("H.mm.ss")
  return (
      <div className='absolute bottom-2 right-2 py-1 px-2 rounded-md text-white
       bg-black text-xs'>
          {videoLengthInSeconds}
    </div>
  )
}

export default VideoLength