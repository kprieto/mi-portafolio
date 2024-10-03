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
                <a href="https://github.com/kprieto/Python/blob/main/juegoDelAhorcado.py" class="text-white text-2xl visited:text-purple-600 ...">
                    Juego del Ahorcado - Python
                </a>
                <a href="https://github.com/kprieto/Python/blob/main/juegoPiedraPapelTijera.py" class="text-white text-2xl visited:text-purple-600 ...">
                    Juego Piedra, Papel o Tijera - Python
                </a>
                <a href="https://github.com/kprieto/Python/blob/main/juegoTrivia.py" class="text-white text-2xl visited:text-purple-600 ...">
                    Juego de Trivia - Python
                </a>
                <a href="https://github.com/kprieto/Python/blob/main/ProyectoCatalagoPeliculas/CatalogoPelicula.py" class="text-white text-2xl visited:text-purple-600 ...">
                    Catálogo de Películas - Python
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