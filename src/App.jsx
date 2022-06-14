import React, {useState} from 'react';




import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Register from './Register';
import SignIn from './SingIn';
import Gestao from './Gestao'
import Pacient from './Pacient';
import Recompensas from './Recompensas';
import Questionario from './Questionario';
import Informativo from './Informativo';

import Resgatar from './Resgatar';
import Agenda from './Agenda';
import DrawerMenu from './Drawer';
import { HStack } from '@chakra-ui/react';
import { getSessionCookie, setSession, logout, SessionContext } from './contexts/useSession';
import DrawerGestao from './DrawerGestao';

function App() {

  const [session, setSession] = useState(getSessionCookie());


  return (
    <BrowserRouter>
    
    <SessionContext.Provider value={session}>
    
    {session === 'Paciente' && <HStack alignItems="flex-end" justifyContent="flex-end" backgroundColor="blue.900">
      <DrawerMenu/>
    </HStack>}
    
    {session === 'Gestao' && <HStack alignItems="flex-end" justifyContent="flex-end" backgroundColor="blue.900">
      <DrawerGestao/>
    </HStack>}


    <Routes>

              <Route path='register' element={<Register/>}/>
            
              <Route path='gestao' element={<Gestao/>}/>
              <Route path='/' element={<SignIn/>}/>
              <Route path='pacient' element={<Pacient/>}/>
              <Route path='recompensas' element={<Recompensas/>}/>
              <Route path='questionario' element={<Questionario/>}/>
              <Route path='informativo' element={<Informativo/>}/>
              <Route path='resgatar' element={<Resgatar/>}/>
              <Route path='agenda' element={<Agenda/>}/>
    </Routes>
    </SessionContext.Provider>

    </BrowserRouter>
  );
}

export default App;
