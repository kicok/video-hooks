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

    console.log(response);
    setVideos(response.data.items);
    setSelectVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectVideo(video);
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
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
