
function ProjetoCard(props) {
    return (
        <div className="m-8 w-96">
            <div className="bg-gray3" >
                <h1 className="text-gray1 font-black text-4xl p-4">
                    {props.nomeProjeto}<span className="text-orange1 font-black text-4xl">.</span>
                </h1>
                <div>
                    <img className="p-8"
                        src={props.imagemProjeto} alt="Imagem do Projeto">
                    </img>
                    <p className="bg-orange1 text-gray1 font-medium text-l p-4 text-justify">
                        {props.textoProjeto}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjetoCard