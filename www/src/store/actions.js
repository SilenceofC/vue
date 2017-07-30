import * as types from './types';
export default {
  showFoot:({commit,state})=>{
    commit(types.SHOW_FOOTER);
  },
  hideFoot:({commit,state})=>{
    commit(types.HIDE_FOOTER);
  },
  showLoading:({commit,state})=>{
    commit(types.SHOW_LOADING);
  },
  hideLoading:({commit,state})=>{
    commit(types.HIDE_LOADING);
  },

}