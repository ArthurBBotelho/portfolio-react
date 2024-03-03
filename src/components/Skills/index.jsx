import Html from "../../images/icons/html-5.png"
import Css from "../../images/icons/css-3.png"
import Js from "../../images/icons/js.png"
import Figma from "../../images/icons/figma.png"
import AtomReact from "../../images/icons/atom.png"
import Git from "../../images/icons/git.png"
import Tailwind from "../../images/icons/tailwind.png"
import Bootstrap from "../../images/icons/bootstrap.png"
import Node from "../../images/icons/node-js.png"
import Firebase from "../../images/icons/firebase.png"

import Button from "../Button"

function Skills() {
    return(
        <div>
            <div className="columns-2">
                <div className="bg-orange1 h-[480px] pl-72">
                    <h1 className="text-white font-black text-9xl">
                        Skills<span className="text-gray1 font-black text-9xl">.</span>
                    </h1>
                    <p className="text-gray1 font-medium text-xl mt-16 pr-16 text-justify">                        
                        Ao longo da minha trajetória, adquiri e continuo a aprimorar um conjunto de habilidades essenciais para a concepção e desenvolvimento de aplicações web. Desde o estágio inicial de design até a fase de publicação, cada aspecto é meticulosamente considerado e desenvolvido visando garantir o melhor resultado para o projeto. Este conjunto de habilidades representa as principais ferramentas que utilizo, refletindo o compromisso com a excelência em cada etapa do processo de desenvolvimento.
                    </p>
                </div>
                <div className="bg-white h-[480px] mr-56 flex flex-col justify-end">
                    <div>
                        <Button nome="CURRICULUM VITAE" link="https://drive.google.com/file/d/1IGspd0BqBTF86ocno2_oPFOjMk1MxAIE/view"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-20">
                <div className="flex justify-center flex-wrap w-[900px]">
                    <img className="h-[180px] p-8" alt="Icone Html" src={Html}></img>
                    <img className="h-[180px] p-8" alt="Icone Css" src={Css}></img>
                    <img className="h-[180px] p-8" alt="Icone Java Script" src={Js}></img>
                    <img className="h-[180px] p-8" alt="Icone Figma" src={Figma}></img>
                    <img className="h-[180px] p-8" alt="Icone React" src={AtomReact}></img>
                    <img className="h-[180px] p-8" alt="Icone Git" src={Git}></img>
                    <img className="h-[180px] p-8" alt="Icone Node js" src={Node}></img>
                    <img className="h-[180px] p-8" alt="Icone Tailwind" src={Tailwind}></img>
                    <img className="h-[180px] p-8" alt="Icone Bootstrap" src={Bootstrap}></img>
                    <img className="h-[180px] p-8" alt="Icone Firebase" src={Firebase}></img>
                </div>
            </div>
        </div>
    )

}

export default Skills