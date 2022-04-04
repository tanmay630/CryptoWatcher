
import './App.css';
import Navbar from './components/navbar';
import { Grid, NextUIProvider } from '@nextui-org/react';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import { Route, Routes } from 'react-router-dom';
import News from './components/News';


const App = () => {
     

  return (
          <>

         <Navbar/>

            <div className='main-content'>
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>    
                    <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                    <Route exact path="/news" element={<News/>}/>
                </Routes>
            </div>
            
                    
       </>
    
  );
}

export default App;
