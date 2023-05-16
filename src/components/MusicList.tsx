import classes from './MusicList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { RootMusicState, Song, musicActions } from '../store/musicSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const MusicList = () => {
  const dispatch = useDispatch();
  const [activeSong, setActiveSong] = useState(-1);
  const songs: Song[] = useSelector((state: RootMusicState) => state.music.songs);

  const playSongHandler = (id: number) => {
    dispatch(musicActions.setPlayActive(id));
    setActiveSong(id);
  };
  
  return (
    <div className={classes.wrapper}>
      <div className={classes['sort-options']}>
        <div>Shufle</div>
        <div>Sort by</div>
        <div>Genre</div>
      </div>
      <ul className={classes.songs}>
        {
          songs.map((song: Song) => (
            <li key={song.id} onDoubleClick={() => playSongHandler(song.id)}>
              <div onClick={() => playSongHandler(song.id)} className={classes.play}>
                <FontAwesomeIcon className={`${activeSong === song.id ? classes['is-playing'] : undefined}`} icon={faPlay}/>
              </div>
              <div className={classes.opt}>{song.title}</div>
              <div className={classes.opt}>{song.artist}</div>
              <div className={classes.opt}>{song.album}</div>
              <div className={classes.opt}>{song.genre}</div>
              <div className={classes.duration}>{song.duration}</div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default MusicList;