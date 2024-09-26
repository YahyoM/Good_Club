/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import 'video-react/dist/video-react.css';
import CustomPlayer from './CustomButton';
import { BACKEND_URL } from '../../axios';


const VideoPlayer = ({data}) => {
  const [playerSource, setPlayerSource] = useState(`${BACKEND_URL}${data.video720p}`);

  useEffect(() => {
    setPlayerSource(`${BACKEND_URL}${data.video720p}`);
  }, [data]);

  return (
    <div className="video-player-container">
      <CustomPlayer  playerSource={playerSource} data={data} setPlayerSource={setPlayerSource} />
    </div>
  );
};

export default VideoPlayer;
