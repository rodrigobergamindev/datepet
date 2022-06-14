import {createContext} from "react";
import { Cookies } from 'react-cookie';

const cookies = new Cookies()


export function setSessionCookie(token){
  
  cookies.remove('token')
  cookies.set('token', token)

};

export function getSessionCookie(){
  
  const sessionCookie = cookies.get('token')
  
  if (sessionCookie === undefined) {
    return;
  } else {
    return sessionCookie;
  }
};

export function logout(){
  
  return cookies.remove('session')
}

export const SessionContext = createContext(getSessionCookie());