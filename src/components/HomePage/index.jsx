import Arthur from "../../images/photos/Arthur.JPG"

function HomePage() {
    return (
        <div>
            <div>
                <h1>Arthur</h1>
                <img src={Arthur}></img>
            </div>
            <div>
                <h1>Botelho Dev.</h1>
                <p>“Transformando ideias em experiências digitais memoráveis. Onde cada código ganha vida”</p>
                <button className="bg-slate-800">HIRE ME</button>
            </div>
        </div>
    )
}

export default HomePage