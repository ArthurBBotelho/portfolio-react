import Button from "../Button"

function ProjetoCard(props) {
    return (
        <div className="w-72 bg-slate-200 m-4">
            <h1>
                {props.projeto}
            </h1>
            <div>
                <img src="#"></img>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis vitae voluptates iste sit numquam, natus recusandae accusamus, ex, excepturi veniam. Distinctio rerum iusto iste veniam, rem corporis tenetur quisquam?
                </p>
            </div>
            <div>
                <Button nome="ACESSAR"/>
            </div>
        </div>
    )
}

export default ProjetoCard