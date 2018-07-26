import { PhotoApi } from '../api/photos';

export function readPhoto(id){
  return {
    type: "READ_PHOTO",
    payload: PhotoApi.readPhoto(id)
  }
}