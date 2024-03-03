import Arthur from "../../images/photos/Arthur.JPG"
import Button from "../Button"

function HomePage() {
    return (
        <div className="columns-2">
            <div className="bg-orange1">
                <img className="w-[75%] ml-72" src={Arthur}></img>
            </div>
            <div className="mr-56 ml-16">
                <div>
                    <h1 className="font-black text-9xl text-gray1">Arthur</h1>
                    <h1 className="font-black text-9xl text-orange1">Botelho<br></br> Dev<span className="font-black text-9xl text-gray1">.</span></h1>
                </div>
                <div className="pt-5">
                    <p className="text-gray1 font-medium text-xl mt-72 ml-24 py-8">Transformando ideias em experiências digitais memoráveis. Onde cada código ganha vida!</p>
                    <div className="mt-12 flex justify-end">
                        <a href="#contato"><button className="bg-gray1 hover:bg-gray2 text-orange1 text-[20px] font-black p-4 px-24">HIRE ME</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage