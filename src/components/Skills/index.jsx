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

function Skills() {
    return(
        <div>
            <div>
                <h1>
                    Skills.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit deleniti officia possimus eveniet atque quisquam, magni consequatur similique pariatur dolorem tempore qui velit tempora dignissimos odit voluptas? Voluptates, eligendi!
                </p>
            </div>
            <div>
                <button className="bg-[#484848]">Curriculum Vitae</button>
            </div>
            <div className="flex">
                <img className="w-24" src={Html}></img>
                <img className="w-24" src={Css}></img>
                <img className="w-24" src={Js}></img>
                <img className="w-24" src={Figma}></img>
                <img className="w-24" src={AtomReact}></img>
                <img className="w-24" src={Git}></img>
                <img className="w-24" src={Node}></img>
                <img className="w-24" src={Tailwind}></img>
                <img className="w-24" src={Bootstrap}></img>
                <img className="w-24" src={Firebase}></img>
            </div>
        </div>
    )

}

export default Skills