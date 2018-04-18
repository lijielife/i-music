import * as types from './mutation-types'

const matutaions = {
  [types.SET_SONG_LIST_HOTS] (state, songListHots) {
    state.songListHots = songListHots
  },
  [types.SET_SELECT_VALUE] (state, selectValue) {
    state.selectValue = selectValue
  },
  [types.SET_SONG_PLAY] (state, songplay) {
    state.songplay = songplay
  }
}

export default matutaions