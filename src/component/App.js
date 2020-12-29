import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectVideo] = useState(null);

  const [videos, search] = useVideos('학교');

  useEffect(() => {
    setSelectVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectVideo} videos={videos} />
            {/* <VideoList onVideoSelect={(video) => setSelectVideo(video)} videos={videos} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
