import ProjetoCard from "../ProjetoCard"
import Aquino from "../../images/projects/Aqui_no.png"
import Finestra from "../../images/projects/Finestra.png"
import Dhouse from "../../images/projects/D-house.png"

function Projetos() {
    return (
        <div>
            <div className="columns-2">
                <h1 className="text-gray1 font-black text-9xl h-[360px] pl-72">
                    Projetos<span className="text-orange1 font-black text-9xl">.</span>
                </h1>
                <p className="bg-orange1 text-gray1 font-medium text-xl h-[360px] mr-72 p-12 pt-40">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit deleniti officia possimus eveniet atque quisquam, magni consequatur similique pariatur dolorem tempore qui velit tempora dignissimos odit voluptas? Voluptates, eligendi!
                </p>
            </div>
            <div className="flex justify-center m-12">
                <ProjetoCard nomeProjeto="Aqui_no" imagemProjeto={Aquino}/>
                <ProjetoCard nomeProjeto="Finestra Eyewear" imagemProjeto={Finestra}/>
                <ProjetoCard nomeProjeto="D-house" imagemProjeto={Dhouse}/>
            </div>
        </div>
    )
}

export default Projetos