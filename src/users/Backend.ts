import axios from "axios";


export const BASE_API = "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/users`;
export interface User {
  _id: string;
  username: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
}

axios.defaults.withCredentials = true
export const signin = async (credentials: User) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

  
  
    
    
