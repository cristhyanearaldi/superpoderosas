import React from 'react';

import Docinho from '../components/Docinho';
import Florzinha from '../components/Florzinha';
import Lindinha from '../components/Lindinha';
import RenderizaResultados from '../components/RenderizaResultados';
import '../styles/Professor.css';

class Professor extends React.Component {
  constructor() {
    super();
    this.state = {
      temTarefaLindinha: true,
      temTarefaFlorzinha: true,
      temTarefaDocinho: true,
    };
  }

  render() {
    const {
      temTarefaLindinha,
      temTarefaFlorzinha,
      temTarefaDocinho,
    } = this.state;
    return (
      <div className="Professor">
        <small>componente Professor</small>
        <RenderizaResultados />

        <div className="quarto-das-meninas">

          <div className="espaco-da-menina lindinha">
            <small><em>espaço para Lindinha</em></small>
            { temTarefaLindinha
              ? (
                <Lindinha />
              )
              : (
                <div>
                  <p>Lindinha se foi....</p>
                </div>
              )}
          </div>

          <div className="espaco-da-menina florzinha">
            <small><em>espaço para Florzinha</em></small>
            { temTarefaFlorzinha
              ? (
                <Florzinha />
              )
              : (
                <div>
                  <p>Florzinha se foi....</p>
                </div>
              )}
          </div>

          <div className="espaco-da-menina docinho">
            <small><em>espaço para Docinho</em></small>
            { temTarefaDocinho
              ? (
                <Docinho />
              )
              : (
                <div>
                  <p>Docinho se foi....</p>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Professor;
