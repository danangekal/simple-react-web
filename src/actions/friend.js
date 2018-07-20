import { UserApi } from '../api/users';

export function allFriends(){
  return {
    type: "ALL_FRIENDS",
    payload: UserApi.allUsers()
  }
}

export function filterFriends(params){
  return {
    type: "FILTER_FRIENDS",
    payload: UserApi.filterUsers(params)
  }
}

