import React, {useState} from 'react';




import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


import SignIn from './SingIn';

import Resgatar from './Resgatar';
import Agenda from './Agenda';
import DrawerMenu from './Drawer';
import { HStack } from '@chakra-ui/react';
import { getSessionCookie, setSession, logout, SessionContext } from './contexts/useSession';
import Profile from './Profile';


function App() {

  const [session, setSession] = useState(getSessionCookie());


  return (
    <BrowserRouter>
    
    <SessionContext.Provider value={session}>
    
    {!!session && <HStack alignItems="flex-end" justifyContent="flex-end" backgroundColor="blue.400">
      <DrawerMenu/>
    </HStack>
    }

    <Routes>
            
              
              <Route path='/' element={<SignIn/>}/>
              <Route path='resgatar' element={<Resgatar/>}/>
              <Route path='agenda' element={<Agenda/>}/>
              <Route path='profile' element={<Profile/>}/>
    </Routes>
    </SessionContext.Provider>

    </BrowserRouter>
  );
}

export default App;
