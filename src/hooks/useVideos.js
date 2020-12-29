import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// 동영상 검색 관련 기능
const useVideos = ({ defaultSearchTerm }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log(defaultSearchTerm);
    search(defaultSearchTerm);
  }, []); // componentDidMount()

  // 검색과 데이터를 수정하는 기능
  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
