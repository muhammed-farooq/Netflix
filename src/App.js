import React from 'react';
import './App.css';
import {originals,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies,Documentaries} from './url'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Orginals' url={originals}/>
      <RowPost title='Action Movies' isSmall url={ActionMovies}/>
      <RowPost title='Comedy Movies' isSmall url={ComedyMovies}/>
      <RowPost title='Horror Movies' isSmall url={HorrorMovies}/>
      <RowPost title='Romance Movies' isSmall url={RomanceMovies}/>
      <RowPost title='Documentaries' isSmall url={Documentaries}/>
    </div>
  );
}

export default App;
