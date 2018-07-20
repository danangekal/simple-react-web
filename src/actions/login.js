import { UserApi } from '../../../api/users';

export function loginUser(email){
  const filter = `?email=${email}`;

  return {
    type: "LOGIN_USER",
    payload: UserApi.filterUsers(filter)
  }
}