import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {Redirect, Route} from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { SingleMovie } from './Components/SingleMovie/SingleMovie';

function App() {
  return (
   <>
   <Navbar/>
   <Route  path="/home" component={Home}/>
   <Route  path="/movies" component={SingleMovie}/>
   <Redirect exact  path='/' to="/home"/>
   </>
  );
}

export default App;
