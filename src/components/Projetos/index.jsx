import ProjetoCard from "../ProjetoCard"

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
            <div className="flex flex-wrap justify-center w-[1200px] m-12">
                <ProjetoCard projeto="Aqui_no" />
                <ProjetoCard />
                <ProjetoCard />
                <ProjetoCard />
            </div>
        </div>
    )
}

export default Projetos