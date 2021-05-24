import React, { useState } from 'react';
import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Results from './components/Results';
import requests from './requests';


import './App.css';

function App() {
  const [chosenOption, setChosenOption] = useState(requests.fetchTrending);
  
  
  return (
    <div className="app">
    {/* Heading */}
     <Heading/>
     {/* Navbar */}
     <NavBar setChosenOption={setChosenOption}/>
     {/* Results */}
     <Results chosenOption= {chosenOption}/>
    </div>
  );
}

export default App;
