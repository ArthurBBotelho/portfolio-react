import Button from "../Button"

function ProjetoCard(props) {
    return (
        <div className="bg-gray2 m-8 w-96">
            <h1 className="text-orange1 font-black text-4xl p-4">
                {props.nomeProjeto}
            </h1>
            <div>
                <img className="p-8"
                src={props.imagemProjeto} alt="Imagem do Projeto">
                </img>
                <p>
                    {props.textoProjeto}
                </p>
            </div>
            <div className="flex justify-center">
                <Button nome="ACESSAR"/>
            </div>
        </div>
    )
}

export default ProjetoCard