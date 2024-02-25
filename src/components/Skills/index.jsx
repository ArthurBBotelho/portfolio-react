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
                <div className="bg-[#FF8A00] flex">
                    <h1 className="text-white font-black text-[150px]">
                        Skills
                    </h1>
                    <h1 className="text-[#303030] font-black text-[150px]">
                        .
                    </h1>
                    <p className="text-[#303030] font-medium text-[18px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit deleniti officia possimus eveniet atque quisquam, magni consequatur similique pariatur dolorem tempore qui velit tempora dignissimos odit voluptas? Voluptates, eligendi!
                    </p>
                </div>
                <div>
                    <Button nome="CURRICULUM VITAE"/>
                </div>
            </div>
            <div className="flex justify-center">
                <img className="h-[180px] p-8" src={Html}></img>
                <img className="h-[180px] p-8" src={Css}></img>
                <img className="h-[180px] p-8" src={Js}></img>
                <img className="h-[180px] p-8" src={Figma}></img>
                <img className="h-[180px] p-8" src={AtomReact}></img>
                <img className="h-[180px] p-8" src={Git}></img>
                <img className="h-[180px] p-8" src={Node}></img>
                <img className="h-[180px] p-8" src={Tailwind}></img>
                <img className="h-[180px] p-8" src={Bootstrap}></img>
                <img className="h-[180px] p-8" src={Firebase}></img>
            </div>
        </div>
    )

}

export default Skills