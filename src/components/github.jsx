import * as React from "react";


function GITHUB({showDiv}){

    return(
        <>
        {showDiv && (
            <div class="Container">
                <div class="d-grid gap-2 col-6 mx-auto">
                {/* <button type="button" class="btn btn-secondary disabled"><h1>SKILLS</h1></button> */}
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-5xl text-sky-500 dark:text-sky-400 ">
                                    <p class="">
                                        GitHub
                                    </p>
                                    </div>
                                </figcaption>                                                              
                            </div>
                        </figure>
                    </div>
                </div>
                <br></br>
                <br></br> 
                <div class="d-grid gap-2 col-6 mx-auto">
                <a href="https://github.com/kprieto/Python" class="text-white text-2xl visited:text-purple-600 ...">
                    Proyectos con Python
                </a>
                <a href="https://github.com/kprieto/springAdopciones" class="text-white text-2xl visited:text-purple-600 ...">
                    Proyecto Adopción de Mascotas con Java y SpringBoot
                </a>
                <a href="https://github.com/kprieto/Modulo_3_Backend/tree/main/Clase15/Ejercicios/Api%20Rest" class="text-white text-2xl visited:text-purple-600 ...">
                    Proyecto Api Rest Node.js, ExpressJS y Typescript
                </a>
                <a href="https://github.com/kprieto/ADA_JAVASCRIPT/tree/main/MODULO_1_JS" class="text-white text-2xl visited:text-purple-600 ...">
                    Clases y Ejercicios de Introducción a JavaScript
                </a>
                <a href="https://github.com/kprieto/Integrador_NodeJS" class="text-white text-2xl visited:text-purple-600 ...">
                    Proyecto de Api de gestión de una biblioteca con Node.js
                </a>
                <a href="https://github.com/GegeRastenis/API-Clothes" class="text-white text-2xl visited:text-purple-600 ...">
                    Proyecto en equipo de un Api Rest con operaciones CRUD
                </a>
                </div>
                <br></br>
                <br></br>
            </div>
        )}
        </>
    )
}

export default GITHUB;