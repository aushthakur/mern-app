import React from 'react';
import{Routes , Route, Router, BrowserRouter} from 'react-router-dom'
import './styles/tailwind.css';
import Home from './Home/Home';
import Work from './Work/Work';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
  
   <Route path="/work" element={<Work/>}/>

  

</Routes>
</BrowserRouter>
  
    </div>
  );
}

export default App;
