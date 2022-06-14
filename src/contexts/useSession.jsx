import {createContext} from "react";
import { Cookies } from 'react-cookie';

const cookies = new Cookies()


export function setSessionCookie(session){
  
  cookies.remove('session')
  cookies.set('session', session)

};

export function getSessionCookie(){
  
  const sessionCookie = cookies.get('session')
  
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