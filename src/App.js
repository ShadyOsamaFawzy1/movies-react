import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {Redirect, Route} from 'react-router-dom';
import { Home } from './Components/Home/Home';

function App() {
  return (
   <>
   <Navbar/>
   <Route  path="/home" component={Home}/>
   <Redirect exact  path='/' to="/home"/>
   </>
  );
}

export default App;
