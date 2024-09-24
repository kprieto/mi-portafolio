import React from "react";
import menu from "../assets/MENU.jpg"
import ordenes from "../assets/ORDENES.jpg"
import editarPO from "../assets/EDITARPO.jpg"
import listaPO from "../assets/LISTA_ORDENES.jpg"
import referencePO from "../assets/REFERENCEORDER.jpg"
import visualizarPO from "../assets/VISUALIZAR_ORDEN.jpg"
import customer from "../assets/CUSTOMER.jpg"
import packing from "../assets/PACKING.jpg"
import pnl from "../assets/PNL.jpg"
import printshop from "../assets/PRINTSHOP.jpg"
import redes from "../assets/REDES.jpg"
import redes2 from "../assets/REDES2.jpg"
import redes3 from "../assets/REDES3.jpg"
import redes4 from "../assets/REDES4.jpg"
import redes5 from "../assets/REDES5.jpg"
import redes6 from "../assets/REDES6.jpg"
import redes7 from "../assets/REDES7.jpg"
import redes8 from "../assets/REDES8.jpg"
import elevador from "../assets/ELEVADOR.jpg"
import viking from "../assets/VIKING.jpg"
import chechadores from "../assets/CHECADORES.jpg"
import videoRedes from "../assets/REDES.mp4"
import camara2 from "../assets/camara2.jpg"
import camara3 from "../assets/camara3.jpg"
import jacks from "../assets/jacks.jpg"
import jacks2 from "../assets/jack2.jpg"
import jacks3 from "../assets/jack3.jpg"

function PROYECTOS({showDiv}){
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
                                        PROYECTOS
                                    </p>
                                    </div>
                                </figcaption>                                                              
                            </div>
                        </figure>
                    </div>
                </div>
                <br></br>
                <br></br> 
                <div class="d-grid gap-2 col-4 mx-auto">
                    <div className="perfil">
                        <figure className="rounded-xl p-1 md:p-0 dark:bg-slate-800">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-xl text-sky-500 dark:text-sky-400 ">
                                    <p class="">
                                        SISTEMA WEB MRP - FORTUNE
                                    </p>
                                    </div>
                                </figcaption>                                                              
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="grid grid-rows-4 grid-cols-3 gap-8">
                    <div>
                        <p className="text-white text-center"> Menú Principal </p>
                        <img  src={menu} class="img-thumbnail"  alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Crear Orden </p>
                        <img src={ordenes} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Editar Orden </p>
                        <img src={editarPO} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div> 
                        <p className="text-white text-center"> Lista Ordenes </p>
                        <img src={listaPO} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Referencia de Orden </p>
                        <img src={referencePO} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>    
                    <div>
                        <p className="text-white text-center"> Vizualizar Orden </p>
                        <img src={visualizarPO} class="img-thumbnail" alt="" loading="lazy"/> 
                    </div>            
                    <div>
                        <p className="text-white text-center"> Menú Customer </p>
                        <img src={customer} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Packing </p>
                        <img src={packing} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Pnl </p>
                        <img src={pnl} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div> 
                        <p className="text-white text-center"> Printshop </p>
                        <img src={printshop} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>                    
                </div> 
                <br></br>  
                <br></br> 
                <div class="d-grid gap-2 col-4 mx-auto">
                    <div className="perfil">
                        <figure className="rounded-xl p-1 md:p-0 dark:bg-slate-800">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-xl text-sky-500 dark:text-sky-400 ">
                                    <p class="">
                                        REDES / IT - FORTUNE
                                    </p>
                                    </div>
                                </figcaption>                                                              
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="grid grid-rows-6 grid-cols-3 gap-8">
                    <div>
                        <p className="text-white text-center"> Cableado Estructurado </p>
                        <img src={redes} class="img-thumbnail"  alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Cableado </p>
                        <img src={redes2} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Cableado </p>
                        <img src={redes3} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div> 
                        <p className="text-white text-center"> Cableado </p>
                        <img src={redes4} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Cableado </p>
                        <img src={redes5} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>    
                    <div>
                        <p className="text-white text-center"> Cableado Estructurado </p>
                        <img src={redes6} class="img-thumbnail" alt="" loading="lazy"/> 
                    </div>            
                    <div>
                        <p className="text-white text-center"> Cableado </p>
                        <img src={redes7} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Cableado </p>
                        <img src={redes8} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div>
                        <p className="text-white text-center"> Cableado </p>
                        <img src={elevador} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div> 
                        <p className="text-white text-center"> Cableado Estructurado </p>
                        <video class="img-thumbnail" controls autoPlay muted>
                            <source src={videoRedes} type="video/mp4" />
                        </video>
                    </div>
                    <div> 
                        <p className="text-white text-center"> Jacks </p>
                        <img src={jacks} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div> 
                        <p className="text-white text-center"> Jacks </p>
                        <img src={jacks2} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div> 
                        <p className="text-white text-center"> Jacks </p>
                        <img src={jacks3} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div> 
                        <p className="text-white text-center"> Instalación Cámara </p>
                        <img src={camara2} class="img-thumbnail" alt="" loading="lazy"/>
                    </div> 
                    <div> 
                        <p className="text-white text-center"> Instalación Cámara </p>
                        <img src={camara3} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>
                    <div> 
                        <p className="text-white text-center"> Instalación Checadores </p>
                        <img src={chechadores} class="img-thumbnail" alt="" loading="lazy"/>
                    </div> 
                    <div> 
                        <p className="text-white text-center"> Instalación Generador de tonos </p>
                        <img src={viking} class="img-thumbnail" alt="" loading="lazy"/>
                    </div>                       
                </div> 
                <br></br> 
                <br></br>           
            </div>
            
        )}
        </>
    )
}

export default PROYECTOS;