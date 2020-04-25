import React from 'react';
import estela from './estela.png';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div class="TermosUso">
        <input type="checkbox" name="termos" id="termos" />
        <label for="termos">&nbsp;&nbsp;Eu aceito os Termos de Uso</label>
      </div><br />
      <button type="button">Criar minha página</button> <br /><br />
        <span>Criado com ♥️ por</span><br />
        <img src={estela} alt="Estela Logo" height="55.6" width="111.4"/>
    </div>
  );
}

export default Footer;
