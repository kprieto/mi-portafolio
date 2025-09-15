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
import PersonIcon from '@mui/icons-material/Person';

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
                    <TimelineDot  >
                        <DataArrayIcon />
                    </TimelineDot>
                    <TimelineConnector   />
                    </TimelineSeparator>
                    <TimelineContent >
                    <Typography variant="h6" component="span" color="white">
                    Bootcamp de Java Profesional
                    </Typography>
                    <Typography color="white">Se aprendio los temas fundamentales de Java.
                    </Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a Java.</li>
                            <li>Programación Básica de Java.</li>
                            <li>Programación Orientada a Objetos (POO).</li>
                            <li>Principios Avanzados de Java.</li>
                            <li>Versiones de Java.</li>
                            <li>JVM y Garbage Collector.</li>
                            <li>Herramientas de Construcción y Gestión de Dependencias.</li>
                            <li>Gestión de Archivos en Java.</li>
                            <li>Testing en Java.</li>
                        </ul>
                    </div>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Laboratorios.</li>
                            <li>Configuración de Mikrotik.</li>
                            <li>Conceptos Básicos.</li>
                            <li>Ciclo de Vida de una Investigación Forense.</li>
                            <li>Técnicas de Adquisición.</li>
                            <li>Etapa de Preservación en la Informática Forense.</li>
                            <li>Clonaciones de Discos.</li>
                            <li>Herramientas de Análisis de Imágenes.</li>
                            <li>Instalación y Configuración de Autopsy en Diferentes Escenarios.</li>
                            <li>Informática Forense en Celulares.</li>

                        </ul>
                    </div>
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
                    <TimelineDot color="secondary">
                        <TerminalIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
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
                    <TimelineDot >
                        <StorageIcon />
                    </TimelineDot>
                    <TimelineConnector  />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                       Fundamentos de Python 1
                    </Typography>
                    <Typography color="white">Cisco Networking Academy transforma la vida de estudiantes,
                    educadores y comunidades gracias al poder de la tecnología, la
                    educación y las oportunidades profesionales.</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a Python y a la Programación Informática.</li>
                            <li>Tipos de Datos, Variables, Operaciones Básicas de Entrada y Salida, Operadores Básicos.</li>
                            <li>Valores Booleanos, Ejecución Condicional, Bucles, Listas y su procesamiento, Operaciones Lógicas y de Bit a Bit.</li>
                            <li>Funciones, Tuplas, Diccionarios, Excepciones y Procesamiento de Datos.</li>
                        </ul>
                    </div>
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
                    <TimelineConnector />
                    <TimelineDot  color="primary">
                        <BackupIcon />
                    </TimelineDot>
                    <TimelineConnector  />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        Curso de Preparación para la Certificación AZ‐900: Microsoft Azure Fundamentals
                    </Typography>
                    <Typography color="white">Está diseñado para darte una base sólida en computación en la nube, 
                        especialmente en el ecosistema de Microsoft Azure.</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Conceptos Básicos de la Nube.</li>
                            <li>Servicios Principales de Azure.</li>
                            <li>Soluciones Principales de Azure.</li>
                            <li>Seguridad.</li>
                            <li>Identidad, Gobernanza, Privacidad y Cumplimiento.</li>
                            <li>Precios y Ciclo de Vida de Azure.</li>
                            <li>Laboratorios.</li>
                        </ul>
                    </div>
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
                    <TimelineConnector />
                    <TimelineDot  color="secondary">
                        <BackupIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        Curso de Preparación para la Certificación AWS Cloud Practitioner
                    </Typography>
                    <Typography color="white">Está diseñado para que domines los fundamentos de 
                        la nube de Amazon Web Services (AWS).</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a la Nube de AWS.</li>
                            <li>Servicios de Cómputo y Almacenamiento.</li>
                            <li>Base de Datos y Arquitectura en la Nube.</li>
                            <li>Preparación para el Examen de Certificación.</li>
                        </ul>
                    </div>
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
                    <TimelineConnector  />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        Curso de Programación en Python
                    </Typography>
                    <Typography color="white">Está diseñado para que aprendas desde cero 
                        hasta un nivel práctico y profesional, ideal si estás consolidando 
                        tus habilidades para backend, automatización o análisis de datos.</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                                <li>Introducción a Python.</li>
                                <li>Primeros Conceptos en Python.</li>
                                <li>Programación Básica como Estructuras de Datos, Ejecuciones Condicionales y Ejecuciones Iterativas.</li>
                                <li>Funciones.</li>
                                <li>Módulos y paquetes.</li>
                                <li>Programación Orientada a Objetos (POO).</li>
                                <li>Errores y Excepciones.</li>
                                <li>Análisis de Datos como Numpy y Pandas.</li>
                                <li>Lectura y Escritura de Ficheros CSV.</li>
                                <li>Visualización de Datos como Matplotlib y Plotly.</li>
                                <li>Herramientas de Desarrollo Jupyter.</li>
                                <li>Actividades.</li>
                        </ul>
                    </div>
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
                    <TimelineConnector />
                    <TimelineDot  color="primary">
                        <PersonIcon />
                    </TimelineDot>
                    <TimelineConnector  />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        MODAM Diplomado en Soft Skills y Habilidades Directivas
                    </Typography>
                    <Typography color="white">Está diseñado para fortalecer tanto el liderazgo 
                        como las competencias interpersonales, algo que encaja perfecto con 
                        el enfoque en branding, emprendimiento y seguridad en sistemas.</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Inteligencia Emocional.</li>
                            <li>Liderazgo y Competencias Directivas.</li>
                            <li>Comunicación y Feedback.</li>
                            <li>Gestión y Trabajo en Equipo.</li>
                            <li>Gestión del Tiempo.</li>
                            <li>Toma de Decisiones.</li>
                            <li>Técnicas de Creatividad.</li>
                            <li>Seguridad Psicológica y Gestión del Miedo.</li>
                            <li>Motivación, Resiliencia y Cambio.</li>
                            <li>Gestión de la Complejidad.</li>
                        </ul>
                    </div>
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
                    <TimelineDot color="secondary">
                        <TerminalIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                        4to Módulo- Base de datos y ciberseguridad
                    </Typography>
                    <Typography color="white">El módulo se enfoca en conocer las base de datos y introducción a la ciberseguridad.</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a las Bases de Datos.</li>
                            <li>Fundamentos de Bases de Datos Relacionales (MySQL).</li>
                            <li>Tipos de Datos en MySQL.</li>
                            <li>Relaciones.</li>
                            <li>Queries.</li>
                            <li>Tipos de Join y Vistas.</li>
                            <li>Stored Procedures.</li>
                            <li>Introducción a Bases de Datos NoSQL (MongoDB).</li>
                            <li>MongoDB.</li>
                            <li>Introducción a la Ciberseguridad.</li>
                            <li>ORM Sequalize.</li>
                            <li>Trabajo Practico Integrador.</li>

                        </ul>
                    </div>
                </Typography>
                    </TimelineContent>
                </TimelineItem>
                    <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                    Septiembre 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <TerminalIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Informática Forense  </span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoInformaticaForenseC}
                            title="Certificado Informática Forense PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoInformaticaForenseC} download="Certificado Informática Forense.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>    
                    </Typography>
                    <Typography color="white">Campamento gratuito online de INFORMÁTICA FORENSE. </Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Conceptos de Informática Forense.</li>
                            <li>Proceso de Investigación Forense.</li>
                            <li>Aprender a Obtener el Hash.</li>
                            <li>Cadena de Custodia.</li>
                            <li>FTK Imager y Adquisición de un USB y Disco Duro.</li>
                            <li>Herramientas HashTap, FTK Imager y Autopsy.</li>
                            <li>Montar una Imagen y Visualización Previa de una Unidad.</li>
                        </ul>
                    </div>
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
                    <TimelineDot color="primary">
                        <HtmlIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Bootcamp Premium de Desarrollo Web Frontend  </span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoBFrontend}
                            title="Certificado Bootcamp Premium de Desarrollo Web Frontend PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoBFrontend} download="Certificado Bootcamp Premium de Desarrollo Web Frontend.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Está enfocado en enseñar las tecnologías fundamentales del frontend: HTML, CSS y JavaScript, con un enfoque práctico y orientado a proyectos.
                    </Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Fundamentos de HTML y CSS.</li>
                            <li>Layouts.</li>
                            <li>Taller Integrador.</li>
                            <li>Fundamentos de JavaScript.</li>
                            <li>Responsive Design.</li>
                            <li>CSS moderno y Multimedia.</li>
                        </ul>
                    </div>
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
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Backend(R) 202410 - TypeScript, Programación Orientada a Objetos, ExpressJS, API REST y CRUD  </span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoTSP}
                            title="Certificado Backend TS PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoTSP} download="Certificado Backend TS.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>     
                    </Typography>
                    <Typography color="white">El objetivo de este curso avanzado es profundizar los conocimientos del uso de TypeScript,aplicar Programación Orientada a Objetos (POO) y el uso de ExpressJS. </Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Conceptos.</li>
                            <li>Programación Orientada a Objetos (POO) en el contexto de TypeScript.</li>
                            <li>Extensión de JavaScript que añade Tipado Estático.</li>
                            <li>Uso de ExpressJS un Framework para Node.js.</li>
                            <li>Conceptos de API REST y Operaciones CRUD.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Bootcamp QA Testing  </span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoQAT}
                            title="Certificado Bootcamp QA Testing PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoQAT} download="Certificado Bootcamp QA Testing.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>    
                    </Typography>
                    <Typography color="white">Es una formación intensiva diseñada para preparar a personas desde cero en el mundo del Quality Assurance.</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a las Pruebas de Software.</li>
                            <li>Pruebas de Aplicaciones Web.</li>
                            <li>Pruebas de API.</li>
                            <li>Pruebas de Aplicaciones Móviles.</li>
                            <li>Uso de la Terminal y Línea de Comandos.</li>
                            <li>Fundamentos de Bases de Datos y SQL.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Introducción a Backend: Fundamentos de Node.js  </span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoNode}
                            title="Certificado Backend Node.js PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoNode} download="Certificado Backend Nodejs.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>    
                    </Typography>
                    <Typography color="white">El objetivo de este módulo es que las alumnas obtengan una base sólida en Node.js, un entorno de ejecución de JavaScript del lado del servidor. </Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                             <li>Introducción a NodeJS.</li>
                            <li>Fundamentos de NodeJs.</li>
                            <li>Persistencia de Datos.</li>
                            <li>Introducción a Servidores.</li>
                            <li>Objeto Process en NodeJs.</li>
                            <li>Introducción a Servidor TCP</li>
                            <li>Métodos de Socket.</li>
                            <li>Módulo Path.</li>
                            <li>Patrones MVC.</li>
                            <li>Biblioteca de UUID.</li>
                            <li>Readline-sync y Módulo Crypto.</li>
                            <li>Trabajo Practico Integrador.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Inglés Slang  </span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoInglesSlang}
                            title="Certificado Advanced Intermediate PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoInglesSlang} download="Certificado Advanced Intermediate.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Programa para aprender Inglés.</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Aplicación para aprender inglés.</li>
                            <li>Diferentes niveles.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <div className="grupo-hover">
                        <span className="nombre-certificado">Bootcamp de Backend con Java y Spring </span>

                        <div className="cuadro-certificado">
                            <iframe
                            src={certificados.certificadoSpringJ}
                            title="Certificado Bootcamp Spring Java PDF"
                            width="300"
                            height="200"
                            />
                            <a href={certificados.certificadoSpringJ} download="Certificado Spring Java.pdf">
                            Descargar PDF
                            </a>
                        </div>
                    </div>
                    </Typography>
                    <Typography color="white">Este curso es para aprender Backend con java y Spring Booot, uno de los frameworks más populares en el desarrollo de aplicaciones Java.</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a Spring Framework y Contendor DI.</li>
                            <li>Spring Boot.</li>
                            <li>Web Applications, RESTful Services y Diseño de APIs.</li>
                            <li>Teoría de Arquitecturas con Enfoque a Microservicios.</li>
                            <li>Persistencia de Datos, Spring Data JPA y JdbcTemplate.</li>
                            <li>Spring Security para Servicios REST.</li>
                            <li>Transaction Management.</li>
                            <li>Testing de Aplicaciones Spring y un Vistazo a TDD.</li>
                            <li>Spring Cloud.</li>
                            <li>Mensajería con Spring Boot.</li>
                            <li>APIs con GraphQL y Spring Boot.</li>
                            <li>Monitoreo, Métricas y Health Indicators.</li>
                            <li>Aspect-Oriented Programming con Spring AOP.</li>
                            <li>Trabajo Final.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a la Computación.</li>
                            <li>Conociendo la Terminal, VSC, Git y GitHub.</li>
                            <li>Introducción a JavaScript.</li>
                            <li>JavaScript Básico como Variables.</li>
                            <li>JavaScript Avanzado como Estructuras Condicionales, Funciones, Métodos de Arrays y String.</li>
                            <li>Trabajo Practico Integrador.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Conceptos Fundamentales de Datos, Roles, Servicios y Cargas de Trabajo.</li>
                            <li>Fundamentos de Datos Relacionales (SQL) y no relacionales (NoSQL).</li>
                            <li>Servicios de Bases de Datos Relacionales en Azure, Implementación, Conexión, Consultas y Herramientas.</li>
                            <li>Exploración Práctica de Azure SQL, SQL Managed Instance y SQL Server en Máquina Virtual.</li>
                            <li>Almacenamiento de Datos no Relacionales con Azure Storage.</li>
                            <li>Almacenamiento Escalable de Datos no Relacionales con Azure Cosmos DB.</li>
                            <li>Análisis de Datos en Azure.</li>
                            <li>Migración de Datos on-premises a la Nube.</li>
                            <li>Buenas Prácticas de Implementación, Administración y Seguridad en Bases de Datos en la Nube.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a Scrum.</li>
                            <li>Componentes Claves</li>
                            <li>Roles en Scrum.</li>
                            <li>Eventos de Scrum.</li>
                            <li>Métricas y KPIs en Scrum.</li>
                            <li>Mejora Continua.</li>
                            <li>Aplicabilidad en Diferentes Industrias.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Fundamentos de la Programación.</li>
                            <li>Estructura de Control de Flujo I como Operadores, Condicionales if y Tablas de Verdad.</li>
                            <li>Tipos de Datos Complejos como Listas, Matrices, Tuplas, Diccionarios y Conjuntos.</li>
                            <li>Estructura de Control de Flujo II como While, Foreach y break/continue.</li>
                            <li>Funciones, Módulos y Paquetes.</li>
                            <li>Git / GitHub.</li>
                            <li>Manejo de Archivos y Datos.</li>
                            <li>Manejo de Excepciones y Errores.</li>
                            <li>Clases y Objetos.</li>
                            <li>Trabajo Practico Integrador.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a GitHub Actions.</li>
                            <li>Configuración Básica.</li>
                            <li>Variables y Secretos.</li>
                            <li>Building Workflows for CI/CD.</li>
                            <li>Workflow Runners.</li>
                            <li>Despliegues.</li>
                            <li>Monitoreo y Notificaciones.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a Python.</li>
                            <li>Herramientas WinPython y Jupyter Notebook.</li>
                            <li>Sintaxis Básica y Tipos de Datos.</li>
                            <li>Funciones Integradas en Python.</li>
                            <li>Python y sus variables Locales , Globales y su Comportamiento.</li>
                            <li>Ejercicios</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Introducción a Python.</li>
                            <li>Herramienta Jupyter Notebook.</li>
                            <li>Fundamentos de Python.</li>
                            <li>Variables.</li>
                            <li>Operadores.</li>
                            <li>Estructuras de Control.</li>
                            <li>Bucles/Loops.</li>
                            <li>Estructuras de Datos.</li>
                            <li>Listas, Tuplas, Diccionarios y Conjuntos.</li>
                            <li>Funciones.</li>
                            <li>Manejo de Errores y Excepciones.</li>
                            <li>Entradas/Salidas.</li>
                            <li>Lectura y Escritura de Archivos.</li>
                            <li>Importación y Creación de Módulos.</li>
                            <li>Paquetes.</li>

                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Breve Introducción a la IA.</li>
                            <li>Herramientas de Productividad de IA.</li>
                            <li>Aprender y comprender.</li>
                            <li>Crear Contenidos.</li>
                            <li>Automatizar Tareas.</li>
                            <li>Cómo Crear Peticiones Efectivas.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Tablas de Datos.</li>
                            <li>Diferencias entre Rangos y Tablas.</li>
                            <li>Formato de Tablas.</li>
                            <li>Fila de totales.</li>
                            <li>Filtrar Datos.</li>
                            <li>Segmentación de Datos.</li>
                            <li>Funciones Vinculando Hojas de Cálculo.</li>
                            <li>Funciones BUSCARV, BUSCARV con Tablas, SI.</li>
                            <li>Tablas Dinámicas.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Fundamentos de JavaScript.</li>
                            <li>Programación Funcional.</li>
                            <li>Introducción a React y JSX.</li>
                            <li>React JS: Esenciales.</li>
                            <li>Estilizando en React.Js.</li>
                            <li>Create React App Hooks.</li>
                            <li>Fetching y Axios.</li>
                            <li>Webpack.</li>
                            <li>React Router V6.</li>
                            <li>Redux RTK.</li>
                            <li>Formik.</li>
                            <li>Deploy App a Vercel.</li>
                            <li>Debugging y Profiling.</li>
                            <li>Técnicas de Optimización.</li>
                            <li>Proyecto Final.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Desarrollo Web.</li>
                            <li>JavaScript.</li>
                            <li>Frotend y Backend de una aplicación Web.</li>

                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Conocer y el Cómo implementar la norma ISO 9001:2015 en una empresa.</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Conceptos básicos de un montacarga</li>
                            <li>Aprender a Operar un Montacargas</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Detección y Prevención de Intrusiones</li>
                            <li>Protocolos de Comunicación</li>
                            <li>Configuración Segura de Sistemas Operativos</li>
                            <li>Gestión de Vulnerabilidades y Parches</li>
                            <li>Ciclo de Vida Seguro del Desarrollo de Software</li>
                            <li>Pruebas de penetración en Aplicaciones Web</li>
                        </ul>
                    </div>
                </Typography>
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
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Fundamentos de la Seguridad de la Información</li>
                            <li>Responsabilidad Civil y Penal de Delitos Informáticos</li>
                            <li>Protección de Datos Personales y Privacidad Digital</li>
                            <li>Gestión de Riesgos Tecnológicos</li>
                            <li>Aspectos Éticos y Sociales</li>
                        </ul>
                    </div>
                </Typography>
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
                        conocer los diferentes tipos de ataques cibernéticos y como
                        resolver las vulnerabilidades de una red.</Typography>
                    <Typography color="white">
                    <div className="grupo-hover">
                        <span className="nombre-tema">Temas:</span>

                        <ul className="cuadro-tema list-disc list-inside">
                            <li>Conocer los Diferentes Tipos de Ataques Cibernéticos.</li>
                            <li>Resolver las Vulnerabilidades de una Red</li>
                        </ul>
                    </div>
                </Typography>
                    </TimelineContent>
                </TimelineItem>
                </Timeline>

            </div>
        )}</>
    )
}

export default Cursos;