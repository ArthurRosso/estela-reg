import React from 'react';
import './Social.css';

function Social() {
  return (
    <div className="Social">
      <div class="container">
        <div class="m-3">
         <div class="form-group">
            <label for="telefone">Telefone</label><br />
            <input type="text" name="telefone" class="form-control " placeholder="Preencha seu telefone"/><br />
            <label for="whats">WhatsApp</label><br />
            <input type="text" name="whats" class="form-control " placeholder="Preencha seu WhatsApp"/><br />
            <label for="email">E-mail</label><br />
            <input type="text" name="email" class="form-control " placeholder="Preencha seu e-mail"/><br />
            <label for="website">Website</label><br />
            <input type="text" name="website" class="form-control " placeholder="Preencha seu Website"/><br />
            <label for="insta">Instagram</label><br />
            <input type="text" name="insta" class="form-control " placeholder="Preencha seu Instagram"/><br />
            <label for="face">Facebook</label><br />
            <input type="text" name="face" class="form-control " placeholder="Preencha seu Facebook"/><br />
            <label for="linkedin">LinkedIn</label><br />
            <input type="text" name="linkedin" class="form-control " placeholder="Preencha seu LinkedIn"/><br />
            <label for="youtube">Youtube</label><br />
            <input type="text" name="youtube" class="form-control " placeholder="Preencha seu Youtube"/><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;