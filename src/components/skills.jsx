import React from "react";
import "../css/effect.css";




function Skills({ showDiv }){
    return(
        <> 
        {showDiv && (
        <div class="container">
            <div class="row">
                <div class="d-grid gap-2 col-6 mx-auto">
                    {/* <button type="button" class="btn btn-secondary disabled"><h1>SKILLS</h1></button> */}
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-5xl text-sky-500 dark:text-sky-400 ">
                                    <p class="">
                                        SKILLS
                                    </p>
                                    </div>
                                </figcaption>                                                              
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        FRONT-END
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">JavaScript</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">HTML</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">CSS</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Booststrap</p></div>
                                </div>  
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">DevExtreme</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Jquery</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">React</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Tailwind CSS</p></div>
                                </div>           
                                </blockquote>                               
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="col-sm">
                <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        BACK-END
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">.NET MVC</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Python</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Java</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">PHP</p></div>
                                </div>  
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">C#</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Spring Boot (Java)</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Node.js</p></div>
                                </div>
                                <br></br>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">WinForms .NET</p></div>
                                </div>            
                                </blockquote>                               
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="col-sm">
                <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white"> 
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        BASE DE DATOS
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">MySQL</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">PostgreSQL</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Microsoft SQL Server</p></div>
                                </div>
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">DBeaver</p></div>
                                </div>                                         
                                </blockquote>                               
                            </div>
                        </figure>
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="col-sm">
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white"> {/*bg-blue-700 */}
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        VIRTUALIZACIÓN
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">VMware</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">VirtualBox</p></div>
                                </div>                               
                                </blockquote>                               
                            </div>
                        </figure>
                    </div>
                </div>  
                <div class="col-sm">
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        IDE/EDITOR CÓDIGO
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Microsoft Visual Studio</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Visual Studio Code</p></div>
                                </div>                                        
                                </blockquote>                               
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="col-sm">
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        CIBERSEGURIDAD
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Hacking</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Kali Linux</p></div>
                                </div>                                        
                                </blockquote>                               
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        IT
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Soporte técnico</p></div>
                                </div> 
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Redes</p></div>
                                </div>  
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Servidores</p></div>
                                </div>
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Mantenimiento y Reparación</p></div>
                                </div>                              
                                </blockquote>                               
                            </div>
                        </figure>
                    </div>
                </div>  
                <div class="col-sm">
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        SISTEMA DE CONTROL DE VERSIONES
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Git / GitHub</p></div>
                                </div>                                         
                                </blockquote>                               
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="col-sm">
                    <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        METODOLOGÍAS AGÍLES
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '35%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Scrum</p></div>
                                </div>                                         
                                </blockquote>                               
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="col-sm"> 
                <div className="perfil">
                        <figure className="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#0a1590] border-2 border-white">
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-2xl text-sky-500 dark:text-sky-100 ">
                                        OTROS
                                    </div>
                                </figcaption>
                                <blockquote>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Microsoft Office</p></div>
                                </div>  
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Figma</p></div>
                                </div>  
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Canva</p></div>
                                </div>
                                <br></br> 
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" className="bar"><p class="text-sm font-bold">Mantis Bug Tracker</p></div>
                                </div>                                    
                                </blockquote>                               
                            </div>
                        </figure>
                    </div> 
                </div>
            </div>
            
        </div>
        )}
        </> 
    )
}
export default Skills;