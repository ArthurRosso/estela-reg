import React from 'react';
import './Pessoal.css';

function Pessoal() {
  return (
    <div className="Pessoal">
      <div class="container">
        <div class="m-3">
         <div class="form-group">
            <label for="saudacao">Saudação</label>
            <select class="form-control " id="saudacao">
              <option>Nenhuma</option>
              <option>Dr.</option>
              <option>Dra.</option>
              <option>Prof.</option>
              <option>Profa.</option>
              <option>Sr.</option>
              <option>Sra.</option>
              <option>Me.</option>
            </select><br />
            <label for="nome">Nome completo:</label><br />
            <input type="text" name="nome" id="nome" class="form-control " placeholder="Preencha seu nome e sobrenome"/><br />
            <label for="profisssao">Profissão</label>
            <select class="form-control " id="profisssao">
              <option selected disabled>Selecione uma profisssao</option>
              <option>Biomédico(a)</option>
              <option>Dentista</option>
              <option>Educador(a) Físico(a) / Personal Trainer</option>
              <option>Enfermeiro(a)</option>
              <option>Esteticista</option>
              <option>Fisioterapeuta</option>
              <option>Fonoaudiólogo(a)</option>
              <option>Massagista / Massoterapeuta</option>
              <option>Médico</option>
              <option>Psicólogo(a)</option>
            </select><br />
            <label for="registro">Número de registro:</label><br />
            <input type="text" name="registro" id="registro" class="form-control " placeholder="Preencha o seu número de registro"/><br />
            <label for="foto">Foto de Perfil:</label><br />
            <input type="file" name="foto" id="foto" class="form-control-file" placeholder="Enviar foto de perfil"/><br />
            <label for="sobre"><i class="fa fa-user" aria-hidden="true"></i> Sobre:</label><br />
            <textarea name="sobre" class="form-control " rows="5">Escreva uma descrição breve sobre você.</textarea><br />
            <label for="espec">Especialidades:</label><br />
            <textarea name="espec" class="form-control " rows="5">Preencha com as suas especialidades.</textarea><br />
            <label for="espex">Experiências:</label><br />
            <textarea name="espex" class="form-control " rows="5">Preencha com as suas experiências.</textarea><br />
            <label for="forma">Formação:</label><br />
            <textarea name="forma" class="form-control " rows="5">Preencha com a sua formação.</textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pessoal;