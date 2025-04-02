import React from 'react';
import ReactDOM from 'react-dom'; //arbol del html

//se raliza un import de un archivo llamado APP que se comporta como un componente
import App from './App';

//muestreme el contenido del App y rindirice la pagina
ReactDOM.render(<App />,
document.getElementById('root'));

