import React, {useState} from 'react';




import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


import SignIn from './SingIn';



import DrawerMenu from './Drawer';
import { Heading, HStack, Text } from '@chakra-ui/react';
import { getSessionCookie, setSession, logout, SessionContext } from './contexts/useSession';
import Profile from './Profile';
import Create from './Create';


function App() {

  const [session, setSession] = useState(getSessionCookie());


  return (
    <BrowserRouter>
    
    <SessionContext.Provider value={session}>
    
    {!!session && <HStack alignItems="center" justifyContent="flex-end" backgroundColor="#3E2723">
      <Text color="whiteAlpha.900" fontWeight="bold">DATE PET</Text>
      <DrawerMenu/>
    </HStack>
    }

    <Routes>
            
              
              <Route path='/' element={<SignIn/>}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='create' element={<Create/>}/>
    </Routes>
    </SessionContext.Provider>

    </BrowserRouter>
  );
}

export default App;
