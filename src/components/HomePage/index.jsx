import Arthur from "../../images/photos/Arthur.JPG"
import Button from "../Button"

function HomePage() {
    return (
        <div className="xl:columns-2 xl:flex-col-reverse">
            <div>
                <img className="h-vh" src={Arthur}></img>
            </div>
            <div className="flex flex-col justify-between">
                <div  className="flex flex-col xl:text-[48px]">
                    <h1 className="font-black text-[96px] text-gray1 leading-[120px]">Arthur</h1>
                    <h1 className="font-black text-[96px] text-orange1 leading-[120px]">Botelho<br></br> Dev<span className="font-black text-[120px] text-gray1">.</span></h1>
                </div>
                <div className="pb-8">
                    <p className="text-gray1 font-medium text-[20px] py-12">“Transformando ideias em experiências digitais memoráveis. Onde cada código ganha vida”</p>
                    <div className="flex justify-end">
                        <Button nome="HIRE ME"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage