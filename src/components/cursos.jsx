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
                    <TimelineDot color="primary">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
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
                    variant="body2"
                    color="white"
                    >
                    Presente
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" >
                        <ComputerIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
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
                    align="right"
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
                        Curso intensivo python
                    </Typography>
                    <Typography color="white">Python es un lenguaje de programación versátil y fácil de aprender
                    en CODEEN</Typography>
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
                    <TimelineDot color="secondary" >
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
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
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
                    Agosto 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <DataArrayIcon />
                    </TimelineDot>
                    <TimelineConnector  sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    Python: de cero a usuario (con honores)
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
                    Python
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
                    Google: Inteligencia Artificial y Productividad
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
                        Microsoft Excel
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
                    Bootcamp React.js
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
                    Becas Santander Tecnología
                    Innovación para el Futuro BEDU
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
                    Agosto 2021
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
                    Diploma en Seguridad en Redes,
                    Sistemas y Aplicaciones
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
                    Agosto 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>                    
                    <TimelineDot>
                        <SecurityIcon/>
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                    Diploma Gestión de la Seguridad y Marco Legal
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