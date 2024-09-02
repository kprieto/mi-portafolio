import * as React from "react";
import pdf from "../assets/CV ANA KAREN PRIETO PARRA.pdf"

function CV({showDiv}){
    const onButtonClick = () => {
        const pdfUrl = pdf;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV Ana Karen Prieto.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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
                                        CV
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
                    <button type="button" class="button btn-lg " onClick={onButtonClick}>
                        Descarga mi CV
                    </button>
                </div>
            </div>
        )}
        </>
    )
}

export default CV;