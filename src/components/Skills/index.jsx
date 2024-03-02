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
                <div className="bg-orange1 h-[400px] pl-72">
                    <h1 className="text-white font-black text-9xl">
                        Skills<span className="text-gray1 font-black text-9xl">.</span>
                    </h1>
                    <p className="text-gray1 font-medium text-xl mt-16 pr-16">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit deleniti officia possimus eveniet atque quisquam, magni consequatur similique pariatur dolorem tempore qui velit tempora dignissimos odit voluptas? Voluptates, eligendi!
                    </p>
                </div>
                <div className="bg-white h-[400px] mr-56 pt-[340px]">
                    <div className="flex justify-end">
                        <Button nome="CURRICULUM VITAE"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-20">
                <div className="flex justify-center flex-wrap w-[900px]">
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
        </div>
    )

}

export default Skills