
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './Pages/Home'
import Favourites from './Pages/Favourites'
import Details from './Pages/Details'


function App() {
  return (
    <div >
       <Navbar/>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
     
   <Routes>
       <Route path='/'
       element ={ <Home/>} />
       <Route path='/Favourites'
       element ={<Favourites/>}/>
       <Route path="/recipe-list/:id"
       element ={<Details/>}/>
  </Routes>
  </div>
    </div>
   
  );
}

export default App;
