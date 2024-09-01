import React from "react";
import fortune from "../assets/fortune.jpg"
import cudti from "../assets/cudti.png"
import xochi from "../assets/xochi.jpg"
import cerem from "../assets/cerem.jpeg"
import promueve from "../assets/PROMUEVE TU NEGOCIO.png"
import insanity from "../assets/insanity.png"
import Carousel from 'react-bootstrap/Carousel';

function Empleos({showDiv}){
    return(
        <>
        {showDiv && (
        <div class="container">
            <div class="d-grid gap-2 col-6 mx-auto">
                {/* <button type="button" class="btn btn-secondary disabled"><h1>SKILLS</h1></button> */}
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-5xl text-sky-500 dark:text-sky-400 ">
                                    <p class="">
                                        EXPERIENCIA PROFESIONAL
                                    </p>
                                    </div>
                                </figcaption>                                                              
                            </div>
                        </figure>
                    </div>
            </div>
            <br></br>
            <br></br>
            <div class="row">
                <div class="col-sm">
                    <div class="flex flex-col rounded-2xl w-72 bg-[#0a1590] shadow-xl">
                        <figure class="flex justify-center items-center rounded-2xl">
                            <img src={fortune} alt="Card Preview" class="size-max rounded-t-2xl"/>
                        </figure>
                        <div class="flex flex-col p-8">
                            <div class="text-2xl font-bold text-center  text-[#f3f4f6] pb-6">IT | Full-Stack Developer | Line Support</div>
                            <div class=" text-xl text-[#f3f4f6] text-justify text-center">Desarrollo de un sistema Web MRP para el control de procesos
                                    de los diferentes departamentos de producción para la impresión de camisetas y poder tener información actualizada
                                    en tiempo real con todos los departamentos.</div>
                            {/* <div class="flex justify-end pt-6">
                                <button class="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="flex flex-col rounded-2xl w-72 h-full bg-[#0a1590] shadow-xl">
                        <figure class="flex justify-center items-center rounded-2xl">
                            <img src={cudti} alt="Card Preview" class="size-full rounded-t-2xl"/>
                        </figure>
                        <div class="flex flex-col p-8">
                            <div class="text-2xl font-bold  text-center  text-[#f3f4f6] pb-6">Developer Java | Documentador</div>
                            <div class=" text-xl text-[#f3f4f6] text-justify text-center">Desarrollo orientado objetos utilizando Java Spring Boot MVC para los diferentes departamentos de la UABC.
                            Encargada de elaboración de documentación.
                            </div>
                            {/* <div class="flex justify-end pt-6">
                                <button class="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="flex flex-col rounded-2xl w-72 h-full bg-[#0a1590] shadow-xl">
                        <figure class="flex justify-center items-center ">
                            <img src={xochi} alt="Card Preview" class="size-full rounded-t-2xl"/>
                        </figure>
                        <div class="flex flex-col p-8">
                            <div class="text-2xl font-bold  text-center text-[#f3f4f6] pb-6">Desarrollador de Sistema</div>
                            <div class=" text-xl text-[#f3f4f6] text-justify text-center">Desarrollo estructurado en la realización de petición de
                            sistemas para los diferentes departamentos de la universidad.</div>
                            {/* <div class="flex justify-end pt-6">
                                <button class="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                            </div> */}
                        </div>
                    </div>
                </div>                
            </div>
            <br></br>
            <br></br>
            <div class="row">
                <div class="col-sm">
                    <div class="flex flex-col rounded-2xl w-72 h-full bg-[#0a1590] shadow-xl">
                            <figure class="flex justify-center items-center rounded-2xl">
                                <img src={cerem} alt="Card Preview" class="size-full rounded-t-2xl"/>
                            </figure>
                            <div class="flex flex-col p-8">
                                <div class="text-2xl font-bold text-center  text-[#f3f4f6] pb-6">Docente de Computación y Tecnología</div>
                                <div class=" text-xl text-[#f3f4f6] text-justify text-center">Encargada de área de cómputo.Docente en los tres niveles educativos: preescolar, primaria y
                                secundaria. </div>
                                {/* <div class="flex justify-end pt-6">
                                    <button class="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                                </div> */}
                            </div>
                        </div>            
                </div>
                <div class="col-sm">
                    <div class="flex flex-col rounded-2xl w-72  h-full bg-[#0a1590] shadow-xl">
                            <figure class="flex justify-center items-center rounded-2xl">
                                <img src={promueve} alt="Card Preview" class="size-full rounded-t-2xl"/>
                            </figure>
                            <div class="flex flex-col p-8">
                                <div class="text-2xl font-bold text-center  text-[#f3f4f6] pb-6">Instalación de área de cómputo</div>
                                <div class=" text-xl text-[#f3f4f6] text-justify text-center">Mantenimiento de computadoras, instalación y configuración de red, software y hardware. </div>
                                {/* <div class="flex justify-end pt-6">
                                    <button class="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                                </div> */}
                            </div>
                    </div>            
                </div>
                <div class="col-sm">
                    <div class="flex flex-col rounded-2xl w-72 h-full bg-[#0a1590] shadow-xl">
                            <figure class="flex justify-center items-center rounded-2xl">
                                <img src={insanity} alt="Card Preview" class="size-full rounded-t-2xl"/>
                            </figure>
                            <div class="flex flex-col p-8">
                                <div class="text-2xl font-bold text-center  text-[#f3f4f6] pb-6">Encargada de turno y Asesorías</div>
                                <div class=" text-xl  text-[#f3f4f6] text-justify text-center">Atención al cliente y apoyo a tareas.
                                Instalación de software y mantenimiento preventivo a PC. </div>
                                {/* <div class="flex justify-end pt-6">
                                    <button class="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                                </div> */}
                            </div>
                    </div>            
                </div>
            </div> 
            
            <br></br>
            <br></br>

        </div>
        )}</>
    );
}

export default Empleos;