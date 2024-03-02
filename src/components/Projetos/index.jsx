import ProjetoCard from "../ProjetoCard"
import Button from "../Button"
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
            <div className="flex justify-center m-2">
                <div className="flex flex-col">
                    <ProjetoCard nomeProjeto="Finestra Eyewear" imagemProjeto={Finestra} textoProjeto="Uma loja virtual de óculos de sol e de grau que esbanja elegancia, esse projeto desenvolvido com  React.js durante o curso apresenta funcionalidade sem deixar de lado o design. Nessa aplicação foi utilizada o firebase, uma ferramenta junto com várias APIs para tornar o projeto mais completo."/>
                    <div className="flex justify-center">
                        <Button nome="ACESSAR" link="https://luanadplr.github.io/projeto_final/"/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <ProjetoCard nomeProjeto="D-house" imagemProjeto={Dhouse} textoProjeto="D-house é um e-commerce construido no curso de Java Script, essa loja virtual de móveis apresenta uma variedade de produtos em um layout de página incrível. A etapa mais complexa e desafiadora durante o processo foi desenvolver um carrinho que  fosse funcional e responsívo."/>
                    <div className="flex justify-center">
                        <Button nome="ACESSAR" link="https://arthurbbotelho.github.io/projeto-final-javascript/index.html"/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <ProjetoCard nomeProjeto="Aqui_no" imagemProjeto={Aquino} textoProjeto="Durante o curso de Desenvolvimento Web foi desenvolvido o Aqui_no com o objetivo de representar uma curadoria de filmes brasileiros separados pelas regiões do país. Um dos principais desafios desse projeto foi construir um mapa que relaciona todas as regiões do Brasil por cores."/>
                    <div className="flex justify-center">
                        <Button nome="ACESSAR" link="https://luanadplr.github.io/projeto_final/"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projetos