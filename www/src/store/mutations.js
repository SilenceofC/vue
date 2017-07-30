import * as types from './types';
export default {
  [types.SHOW_FOOTER]:(state)=>{
    state.foot = true;
  },
  [types.HIDE_FOOTER]:(state)=>{
    state.foot = false;
  },
  [types.SHOW_LOADING]:(state)=>{
    state.loading = true;
  },
  [types.HIDE_LOADING]:(state)=>{
    state.loading = false;
  },

}