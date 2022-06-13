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

function App() {



  return (
    <BrowserRouter>
    
   
    <Routes>

              <Route path='register' element={<Register/>}/>
              <Route path='profile/:slug' element={<Profile/>}/>
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
