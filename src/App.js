import React from 'react';
import './style.css'
import Home from './Home';  
import Work from './Work';   
import Join from './Join';  
import Sign from './Sign'; 
import Document from './Document';                                                                                                                                                                                                                                                                                                                                                                                     
import {BrowserRouter as
Router,
Routes,
Route} from 'react-router-dom';

function App()
{
    return(
        <div className="App">
   <Router>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Work" element={<Work/>}></Route>
        <Route exact path="/Join" element={<Join/>}></Route>
        <Route exact path="/Sign" element={<Sign/>}></Route>
        <Route exact path="/Document" element={<Document/>}></Route>
    </Routes>
   </Router>
        </div>
   
    )
}
export default App;