import './App.css';
import {Route, Routes } from  'react-router-dom'
import Form from './components/Form';
import Landing from './views/Landing';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';

function App() {
  return (
    <div className="App">
      <h1>App.js Page</h1>
      <Form></Form>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path ='/people/:id' element = {<People/>} />
        <Route path ='/planets/:id' element = {<Planets/>} />
        <Route path ='/starships/:id' element = {<Starships/>} />
      </Routes>
    </div>
  );
}

export default App;
