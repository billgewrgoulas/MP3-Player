import { useEffect, useRef } from 'react';
import { RootMusicState, Song } from '../store/musicSlice';
import classes from './Player.module.css';
import { useSelector } from 'react-redux';

interface Props {
  children?: React.ReactNode;
}

const Player = (props: Props) => {
  const activeSong: Song = useSelector((state: RootMusicState) => state.music.songs[state.music.activeSong]);
  const play: boolean = useSelector((state: RootMusicState) => state.music.playActive);
  const sourceRef: any = useRef();
  const audioRef: any = useRef();

  useEffect(() => {
    sourceRef.current.src = '/music/' + activeSong.title + '.mp3';
    audioRef.current.load();

    if(play){
      audioRef.current.play();
    }

  }, [activeSong, play]);
  
  return (
    <div className={classes.wrapper}>
      <audio ref={audioRef} autoPlay={false} controls={true}>
        <source ref={sourceRef} id='audio' src={'/music/' + activeSong.title + '.mp3'} type='audio/mp3'></source>
      </audio>
    </div>
  );
}

export default Player;