function Button(props) {
    return (
            <a target='blank' href={props.link}><button className="bg-gray1 hover:bg-gray2 text-orange1 text-[20px] font-black p-4 px-24">{props.nome}</button></a>
    )
}

export default Button