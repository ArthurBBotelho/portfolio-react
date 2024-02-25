import Arthur from "../../images/photos/Arthur.JPG"
import Button from "../Button"

function HomePage() {
    return (
        <div className="columns-2 my-8">
            <div className="">
                <img className="w-[80%]" src={Arthur}></img>
                <h1 className="font-black text-[150px] text-[#303030]">Arthur</h1>
            </div>
            <div className="w-[80%]">
                <div  className="flex">
                    <h1 className="font-black text-[150px] text-[#FF8A00]">Botelho Dev</h1>
                    <h1 className="font-black text-[150px] text-[#303030]">.</h1>
                </div>
                <div>
                    <p className="text-[#303030] font-medium text-[24px] h-full w-full px-12 py-36">“Transformando ideias em experiências digitais memoráveis. Onde cada código ganha vida”</p>
                    <Button nome="HIRE ME"/>
                </div>
            </div>
        </div>
    )
}

export default HomePage