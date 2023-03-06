import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Profil from "./pages/profil"

import './App.css'

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
             path="/" 
             element={<Home />} 
          />
          <Route 
             path="/Profil/:id" 
             element={<Profil />} 
          />
        </Routes>
      </Router>   
      
    </div>
  );
}

export default App;
