import React, { useEffect, useState } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectVideo(response.data.items[0]);
  };

  useEffect(() => {
    onTermSubmit('buildings');
  }, []); // componentDidMount()

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
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
