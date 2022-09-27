
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Country from './components/Country/Country';
import Countries from './components/Countires/Countries';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}
//     <div>
//       <Header></Header>
//       {/* <h1>Visiting Rest Countries With React!!!</h1>
//       <h2>Available Countries:{countries.length}</h2>
//       {
//         countries.map(country =><Country name={country.name.common} population={country.population}></Country> )
//       } */}
//     </div>
    

//   );
// }
// function Country(props){
//   return(
//     <div>
//    <h1>Name:{props.name}</h1>
//    <h4>Population:{props.population}</h4>
//     </div>
//   )
// }

export default App;
