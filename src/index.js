import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Components/Search.jsx'


function App(){
  return (
  <>  
    <h1>Buscar caracteres aleatórios</h1>
    <h2>Digite uma letra ou palavra para efetuar a busca</h2>   
    <Button/>
  </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

