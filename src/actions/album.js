import { AlbumApi } from '../api/albums';

export function readAlbum(params){
  return {
    type: "READ_ALBUM",
    payload: AlbumApi.filterAlbums(params)
  }
}