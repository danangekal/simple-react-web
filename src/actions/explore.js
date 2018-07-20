import { AlbumApi } from '../api/albums';

export function allExplores(){
  return {
    type: "ALL_EXPLORES",
    payload: AlbumApi.allAlbums()
  }
}

export function filterExplores(params){
  return {
    type: "FILTER_EXPLORES",
    payload: AlbumApi.filterAlbums(params)
  }
}