import React, { useState } from 'react';
import Portada from '../components/portada';
import Skills from '../components/skills';
import Empleos from '../components/empleos';
import Cursos from '../components/cursos';


function Secciones() {
  // Elevar el estado al componente principal
    const [showDiv, setShowDiv] = useState(false);

    return (
    <div class="container">
      <Portada setShowDiv={setShowDiv} showDiv={showDiv} /> {/* Pasar setShowDiv y showDiv */}
      <Skills showDiv={showDiv} /> {/* Pasar showDiv a Skills */}
      <Empleos showDiv={showDiv} /> {/* Pasar showDiv a Empleos */}
      <Cursos showDiv={showDiv} /> {/* Pasar showDiv a Cursos */}
    </div>
    );
}

export default Secciones;