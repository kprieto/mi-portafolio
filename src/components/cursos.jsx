import * as React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TerminalIcon from '@mui/icons-material/Terminal';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import JavascriptIcon from '@mui/icons-material/Javascript';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import SchoolIcon from '@mui/icons-material/School';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AssistantIcon from '@mui/icons-material/Assistant';
import DataArrayIcon from '@mui/icons-material/DataArray';
import GitHubIcon from '@mui/icons-material/GitHub';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BackupIcon from '@mui/icons-material/Backup';
import HtmlIcon from '@mui/icons-material/Html';
import certificados from '../components/certificados';
import "../css/effect.css";

function Cursos({showDiv}){
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
                                        CURSOS
                                    </p>
                                    </div>
                                </figcaption>                                                              
                            </div>
                        </figure>
                    </div>
                </div>
                <br></br>
                <br></br>
                <Timeline position="alternate">
                <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Presente
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" >
                        <DataArrayIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }}  />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    Bootcamp de Java Profesional
                    </Typography>
                    <Typography color="white">Se aprendio los temas fundamentales de Java.
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Presente
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <ComputerIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    Informática Forense
                    </Typography>
                    <Typography color="white">Se aprenderán los procedimientos necesarios para obtener información
                        de una computadora conservando cada sector de la misma en su estado original, sin modificarlo
                        ni perturbarlo.
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Presente
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <TerminalIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        G.H.O.S.T
                    </Typography>
                    <Typography color="white">Curso de hacking y ciberseguridad de cero a experto.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Presente
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot  color="secondary">
                        <StorageIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        CISCO Networking Academy
                    </Typography>
                    <Typography color="white">Cisco Networking Academy transforma la vida de estudiantes,
                    educadores y comunidades gracias al poder de la tecnología, la
                    educación y las oportunidades profesionales.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Presente
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot >
                        <TerminalIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        4to Módulo- Base de datos y ciberseguridad
                    </Typography>
                    <Typography color="white">El módulo se enfoca en conocer las base de datos y introducción a la ciberseguridad.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Junio 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <HtmlIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    Bootcamp Premium de Desarrollo Web Frontend
                    </Typography>
                    <Typography color="white">Está enfocado en enseñar las tecnologías fundamentales del frontend: HTML, CSS y JavaScript, con un enfoque práctico y orientado a proyectos.
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Junio 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot  color="secondary">
                        <StorageIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        Backend(R) 202410 - TypeScript, Programación Orientada a Objetos, ExpressJS, API REST y CRUD
                    </Typography>
                    <Typography color="white">El objetivo de este curso avanzado es profundizar los conocimientos del uso de TypeScript,aplicar Programación Orientada a Objetos (POO) y el uso de ExpressJS. </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                    >
                    Mayo 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot >
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        Bootcamp QA Testing
                    </Typography>
                    <Typography color="white">Es una formación intensiva diseñada para preparar a personas desde cero en el mundo del Quality Assurance.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                    >
                    Marzo 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary" >
                        <ComputerIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        Introducción a Backend: Fundamentos de Node.js 
                    </Typography>
                    <Typography color="white">El objetivo de este módulo es que las alumnas obtengan una base sólida en Node.js, un entorno de ejecución de JavaScript del lado del servidor. </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Enero 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" >
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    Inglés Slang
                    </Typography>
                    <Typography color="white">Programa para aprender Inglés.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                    >
                    Enero 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <ComputerIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        Bootcamp de Backend con Java y Spring
                    </Typography>
                    <Typography color="white">Este curso es para aprender Backend con java y Spring Booot, uno de los frameworks más populares en el desarrollo de aplicaciones Java.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Diciembre 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <JavascriptIcon />
                    </TimelineDot>
                    <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Introducción a la Programación con JavaScript </span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoJavaScript}
                            title="Certificado JavaScript PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoJavaScript} download="Certificado JavaScript.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Este curso formativo está estructurado para guiar a los participantes desde los fundamentos de la informática hasta la programación con Javascript.</Typography>
                    </TimelineContent>
                </TimelineItem> 
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Diciembre 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <BackupIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Bootcamp De Bases de Datos en la nube con Azure</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoBootcampAzure}
                            title="Bootcamp BD Azure PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoBootcampAzure} download="Bootcamp BD Azure.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Comprensión sólida de los principios fundamentales de los datos en la nube.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Octubre 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <SupervisorAccountIcon />
                    </TimelineDot>
                    <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Fundamentos de Scrum</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoFS}
                            title="Certificado Fundamentos de Scrum PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoFS} download="Certificado Fundamentos de Scrum.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Compresión para Cualquier Industria no importando la especialidad.</Typography>
                    </TimelineContent>
                </TimelineItem> 
                <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Septiembre 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector  />
                    <TimelineDot>
                        <ComputerIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Curso Intensivo Python</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoPythonI}
                            title="Certificado Intensivo Python PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoPythonI} download="Certificado Intensivo Python.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Python es un lenguaje de programación versátil y fácil de aprender
                    en CODEEN / ADA</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Septiembre 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <GitHubIcon />
                    </TimelineDot>
                    <TimelineConnector  sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    
                     <div className="grupo-hover">
                        <span className="nombre-certificado">GitHub Actions</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoGitHubActions}
                            title="Certificado GitHub Actions PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoGitHubActions} download="Certificado GitHub Actions.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Aprender GitHub Actions.</Typography>
                    </TimelineContent>
                </TimelineItem> 
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Agosto 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <DataArrayIcon />
                    </TimelineDot>
                    <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Python: de cero a usuario (con honores)</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoPythonCeroC}
                            title="Certificado Python Cero PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoPythonCeroC} download="Certificado Python Cero.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Aprender Python con Jupyter.</Typography>
                    </TimelineContent>
                </TimelineItem> 
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                    >
                    Agosto 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>                    
                    <TimelineDot color="primary">
                        <DataArrayIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    
                    <div className="grupo-hover">
                        <span className="nombre-certificado">  Python</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoPythonS}
                            title="Certificado Python PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoPythonS} download="Certificado Python.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Introducción a Python. </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Agosto 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <AssistantIcon />
                    </TimelineDot>
                    <TimelineConnector  sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Google: Inteligencia Artificial y Productividad</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoIA}
                            title="Certificado IA PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoIA} download="Google-IA-Certificado.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                     
                    </Typography>
                    <Typography color="white">Conocer herramientas de IA generativa y Google Gemini.</Typography>
                    </TimelineContent>
                </TimelineItem>               
                <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Agosto 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot >
                        <PostAddIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                      
                    <div className="grupo-hover">
                        <span className="nombre-certificado">  Microsoft Excel</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoExcel}
                            title="Certificado Excel PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoExcel} download="Certificado Excel.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Curso de Excel básico a intermedio.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                    >
                    Mayo 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>                    
                    <TimelineDot color="primary">
                        <DataObjectIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Bootcamp React.js</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoReact}
                            title="Bootcamp React PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoReact} download="Bootcamp React.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Aprender React.js en Código facilito</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Mayo 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <JavascriptIcon />
                    </TimelineDot>
                    <TimelineConnector  sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">

                    <div className="grupo-hover">
                        <span className="nombre-certificado">Becas Santander Tecnología Innovación para el Futuro BEDU</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.diplomaBedu}
                            title="BEDU"
                            width="300"
                            height="200"
                            />

                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Learning Path en Desarrollo Web - JavaScript presente Objetivo.
                    Diseñar y desarrollar el frontend y el backend de una aplicación
                    web completamente interactiva y funcional desde cero utilizando
                    JavaScript.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                    >
                    Febrero 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>                    
                    <TimelineDot>
                        <ListAltIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    Norma y Curso ISO 9001:2015
                    </Typography>
                    <Typography color="white">Para conocer y el comó implementar la norma ISO 9001:2015 en
                    una empresa.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Mayo 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <ElectricRickshawIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    Operación y seguridad del
                    montacargas
                    </Typography>
                    <Typography color="white">Aprender a operar un montacargas.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Agosto 2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" >
                        <SystemSecurityUpdateGoodIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Diploma en Seguridad en Redes,Sistemas y Aplicaciones</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.diplomadoSeguridad}
                            title="Diplomado Unir Seguridad PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.diplomadoSeguridad} download="Unir-Seguridad-Diplomado.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Diplomado en UNIR.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                    >
                    Agosto 2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>                    
                    <TimelineDot>
                        <SecurityIcon/>
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Diploma Gestión de la Seguridad y Marco legal</span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.diplomadoGestionSeguridad}
                            title="Diplomado Unir Gestion PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.diplomadoGestionSeguridad} download="Unir-GEstion-Seguridad-Diplomado.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Diplomado en UNIR.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                    >
                    Septiembre 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LockIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    Hacking Day
                    </Typography>
                    <Typography color="white">Curso de Hacking de Nivel Principiante ofrecido por WhiteSuit. Para
                        conocer los diferentes tipos de ataques cibernetivos y como
                        resolver las vulnerabilidades de una red.</Typography>
                    </TimelineContent>
                </TimelineItem>
                </Timeline>

            </div>
        )}</>
    )
}

export default Cursos;