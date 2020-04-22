import React from 'react';
import './App.css';
import Pessoal from '../Pessoal/Pessoal';
import Social from '../Social/Social';
import Local from '../Local/Local';
import Horario from '../Horario/Horario';

function App() {
  return (
    <div class="container pt-3">
    <div className="App">
      <form>
      <div class="row">
        <div class="col-md-12">
        <Pessoal />
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-md-12">
        <Social />
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-md-12">
        <Local />
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-md-12">
        <Horario />
        </div>
      </div>
      </form>
    </div>
    </div>
  );
}

export default App;
