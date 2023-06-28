import React from 'react';
import NavBar from './components/Navbar/NavBar';
import {orginals,action, romance,trending,horror} from './url'
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';


function App() {
  return (
    <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost  url={orginals}  title='Netflix Orginals'/>
    <RowPost  url={action} title='Action' isSmall/>
    <RowPost  url={romance} title='Romance' isSmall/>
    <RowPost  url={trending} title='Trending' isSmall/>
    <RowPost  url={horror} title='Horror' isSmall/>
    </div>
  );
}

export default App;
