import React from 'react';
import './Local.css';

function Local() {
  return (
    <div className="Local">
        <div className="Local-header">
              <div class='m-3'>
                <p>Local de atendimento</p>
              </div>
        </div>
      <div class="container">
        <div class="m-3">
         <div class="form-group">
            <label for="nome_local">Nome do Local:</label><br />
            <input type="text" name="nome_local" class="form-control" placeholder="Preencha o nome do local"/><br />
            <label for="endereco">Endereço:</label><br />
            <input type="text" name="endereco" class="form-control" placeholder="Preencha o seu endereço"/><br />
            <label for="bairro">Bairro:</label><br />
            <input type="text" name="bairro" class="form-control" placeholder="Preencha seu bairro"/><br />
            <label for="cidade">Cidade:</label><br />
            <input type="text" name="cidade" class="form-control" placeholder="Preencha a sua cidade"/><br />
            <label for="estado">Estado:</label><br />
            <input type="text" name="estado" class="form-control" placeholder="Preencha o seu estado"/><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Local;