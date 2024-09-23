import React, { useState } from 'react';
import Portada from '../components/portada';
import Skills from '../components/skills';
import Empleos from '../components/empleos';
import Cursos from '../components/cursos';
import CV from '../components/cv';
import GitHub from '../components/github';
import Proyectos from '../components/proyectos';
import {  MDBFooter} from 'mdb-react-ui-kit';

function Secciones() {
  // Elevar el estado al componente principal
    const [showDiv, setShowDiv] = useState(false);
    const getCurrentYear = () => {
      return new Date().getFullYear();
    };
    return (
    <div class="container">
      <Portada setShowDiv={setShowDiv} showDiv={showDiv} /> {/* Pasar setShowDiv y showDiv */}
      <Skills showDiv={showDiv} /> {/* Pasar showDiv a Skills */}
      <Empleos showDiv={showDiv} /> {/* Pasar showDiv a Empleos */}
      <Cursos showDiv={showDiv} /> {/* Pasar showDiv a Cursos */}
      <Proyectos showDiv={showDiv} /> {/* Pasar showDiv a proyectos */}
      <GitHub showDiv={showDiv} /> {/* Pasar showDiv a github */}
      <CV showDiv={showDiv} /> {/* Pasar showDiv a CV */}
      <br></br>
      <br></br>
      {showDiv && (
      <MDBFooter>
        <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <p className='text-white'>© {getCurrentYear()} Copyright</p> 
        </div>
      </MDBFooter>
      )}
    </div>
    );
}

export default Secciones;