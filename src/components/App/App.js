import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import Landing from '../../views/Landing/Landing';
import { Adminpage } from '../AdminPage/Admin';
import { NewUser } from '../NewUser/NewUser';
// import logo from '../../assets/logo.svg';


const firebaseConfig = {
  apiKey: "AIzaSyBAsoMYxzM46yavU-4Em-1ihbBNWzznvDg",
  authDomain: "blueocean-612b2.firebaseapp.com",
  projectId: "blueocean-612b2",
  storageBucket: "blueocean-612b2.appspot.com",
  messagingSenderId: "43711589559",
  appId: "1:43711589559:web:effcb703d3262364feb132",
  measurementId: "G-TW42PT564X"
};

const App = () => {
  initializeApp(firebaseConfig);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path='/home' element={<Adminpage/>} />
      <Route path='createuser' element={<NewUser/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
