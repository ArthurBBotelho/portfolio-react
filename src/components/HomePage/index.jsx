import Arthur from "../../images/photos/Arthur.JPG"

function HomePage() {
    return (
        <div className="columns-2 gap-2">
            <div>
                <img className="w-[80%]" src={Arthur}></img>
            </div>
            <div>
                <h1 className="font-black text-[120px] text-[#303030]">Arthur</h1>
                <h1 className="font-black text-[120px] text-[#FF8A00] text-base-2">Botelho Dev.</h1>
                
                <div>
                    <p>“Transformando ideias em experiências digitais memoráveis. Onde cada código ganha vida”</p>
                    <button className="bg-slate-800 text-[#FF8A00]">HIRE ME</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage