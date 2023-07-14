import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comic: { areLoaded: false, data: [] },
  creator: { areLoaded: false, data: [] },
  character: { areLoaded: false, data: [] },
  event: { areLoaded: false, data: [] },
  serie: { areLoaded: false, data: [] },
  storie: { areLoaded: false, data: [] },
};

export const userMarvel = createSlice({
  name: 'marvel',
  initialState,
  reducers: {
    addComic: (state, action) => {
      state.comic.data = action.payload;
      state.comic.areLoaded = true;
    },

    addCreator: (state, action) => {
      state.creator.data = action.payload;
      state.creator.areLoaded = true;
    },

    addList: (state, action) => {
      const typeData = action.payload.principalList;
      const data = action.payload.data;

      switch (typeData) {
        case 'comics':
          state.comic.data = data;
          state.comic.areLoaded = true;
          break;
        case 'creators':
          state.creator.data = data;
          state.creator.areLoaded = true;

          break;

        case 'characters':
          state.character.data = data;
          state.character.areLoaded = true;
          break;

        case 'events':
          state.event.data = data;
          state.event.areLoaded = true;
          break;

        case 'series':
          state.serie.data = data;
          state.serie.areLoaded = true;
          break;

        case 'stories':
          state.storie.data = data;
          state.storie.areLoaded = true;
          break;

        default:
          break;
      }
    },
  },
});

export const { addComic, addCreator, addList } = userMarvel.actions;
export default userMarvel.reducer;
