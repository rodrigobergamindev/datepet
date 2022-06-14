import React, {useState} from 'react';




import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Profile from './Profile';
import Register from './Register';
import SignIn from './SingIn';
import Gestao from './Gestao'
import Pacient from './Pacient';
import Dashboard from './Dashboard';
import Recompensas from './Recompensas';
import Questionario from './Questionario';
import Informativo from './Informativo';
import DashboardPacient from './DashboardPacient';
import Resgatar from './Resgatar';
import Agenda from './Agenda';
import DrawerMenu from './Drawer';
import { HStack } from '@chakra-ui/react';

function App() {



  return (
    <BrowserRouter>
    
    <HStack alignItems="flex-end" justifyContent="flex-end" backgroundColor="blue.900">
      <DrawerMenu/>
    </HStack>
   
    <Routes>

              <Route path='register' element={<Register/>}/>
            
              <Route path='gestao' element={<Gestao/>}/>
              <Route path='/' element={<SignIn/>}/>
              <Route path='pacient' element={<Pacient/>}/>
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='recompensas' element={<Recompensas/>}/>
              <Route path='questionario' element={<Questionario/>}/>
              <Route path='informativo' element={<Informativo/>}/>
              <Route path='dashboard-pacient' element={<DashboardPacient/>}/>
              <Route path='resgatar' element={<Resgatar/>}/>
              <Route path='agenda' element={<Agenda/>}/>
    </Routes>
   

    </BrowserRouter>
  );
}

export default App;
