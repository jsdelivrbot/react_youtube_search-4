import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = function(props){

      const videolistitem=   props.videos.map((video)=>{
            return <VideoListItem
            onVideoSelect = {props.onVideoSelect}
             key={video.etag} video = {video}/>
        });
    return (
            <ul className="test">
            {videolistitem}
            </ul>
    );
}

export default VideoList;