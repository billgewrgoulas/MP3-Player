import { createSlice } from "@reduxjs/toolkit";
import Songs from "./songst";
import store from "./store";

export interface Song{
  title: string;
  artist: string;
  album: string;
  genre: string;
  duration: string;
  id: number;
}

export interface MusicState {
  songs: Array<Song>;
  activeSong: number;
  playActive: boolean;
}

const initialState: MusicState = {
  songs: Songs,
  activeSong: 0,
  playActive: false,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
      state.playActive = false;
    },
    setPlayActive: (state, action) => {
      state.playActive = true;
      state.activeSong = action.payload;
    },
    loadSongs: (state, action) => {

    }
  }
});

export type RootMusicState = ReturnType<typeof store.getState>
export const musicActions = musicSlice.actions;
export const musicReducer = musicSlice.reducer;