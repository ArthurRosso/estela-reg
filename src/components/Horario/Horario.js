import React from 'react';
import './Horario.css';

function Horario() {
  return (
    <div className="Horario">
        <div className="Local-header">
              <div class='m-3'>
                <p>Horários de atendimento</p>
              </div>
        </div>
      <div class="container">
        <div class="m-3">
         <div class="form-group">
            <label for="segunda">Segunda-feira</label>
            <select class="form-control " id="segunda" name="segunda">
              <option selected disabled>Início</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <select class="form-control " id="segunda" name="segunda">
              <option selected disabled>Fim</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <label for="terca">Terça-feira</label>
            <select class="form-control " id="terca"  name="terca">
              <option selected disabled>Início</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <select class="form-control " id="terca" name="terca">
              <option selected disabled>Fim</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <label for="quarta">Quarta-feira</label>
            <select class="form-control " id="quarta"  name="quarta">
              <option selected disabled>Início</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <select class="form-control " id="quarta" name="quarta">
              <option selected disabled>Fim</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <label for="quinta">Quinta-feira</label>
            <select class="form-control " id="quinta"  name="quinta">
              <option selected disabled>Início</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <select class="form-control " id="quinta" name="quinta">
              <option selected disabled>Fim</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <label for="sexta">Sexta-feira</label>
            <select class="form-control " id="sexta" name="sexta">
              <option selected disabled>Início</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <select class="form-control " id="sexta" name="sexta">
              <option selected disabled>Fim</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <label for="sabado">Sábado</label>
            <select class="form-control " id="sabado" name="sabado">
              <option selected disabled>Início</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <select class="form-control " id="sabado" name="sabado">
              <option selected disabled>Início</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <label for="domingo">Domingo</label>
            <select class="form-control " id="domingo" name="domingo">
              <option selected disabled>Início</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
            <select class="form-control " id="domingo" name="domingo">
              <option selected disabled>Fim</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
            </select><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horario;