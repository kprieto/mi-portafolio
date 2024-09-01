import React, { useEffect } from 'react';
import foto from "../assets/foto.jpg";
import Typewriter from "typewriter-effect";
import "../css/effect.css";
import { typewriterp } from "../js/typewriter";


function Portada({ showDiv, setShowDiv }) {   
    
    useEffect(() => {
        typewriterp();
    }, []);

    return (
        <div className="container"> 
            <div className="Effect">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Bienvenidos!!")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("A Mi Portafolio.")
                            .callFunction(() => setShowDiv(true))
                            .start();
                    }}
                />
            </div>

            {showDiv && ( // Conditionally render div based on state
                <div className="container">
                    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                        <img className="w-45 h-24 md:w-50 md:h-auto" src={foto} alt="" width="384" height="512"/>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="text-justify text-lg font-medium text-white EffectType">Profesional versátil que maneja tanto el desarrollo del front-end como del back-end de aplicaciones web y de escritorio. 
                                    Mi principal objetivo es garantizar que todas las partes del sistema funcionen sin problemas y de manera eficiente.
                                </p>
                                <p className="text-justify text-lg font-medium text-white EffectType">Profesional responsable de la instalación, mantenimiento y soporte de sistemas de hardware, software, y redes. 
                                    Mi principal objetivo es garantizar que los sistemas informáticos funcionen de manera eficiente y segura, proporcionando soporte técnico a los usuarios cuando sea necesario.
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-2xl text-sky-500 dark:text-sky-400 ">
                                    ANA KAREN PRIETO PARRA
                                </div>
                                <div className="text-slate-700 dark:text-slate-500">
                                    FULL-STACK DEVELOPER | IT | LINE SUPPORT
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </div>
            )}
        </div> 
    );
}

export default Portada;