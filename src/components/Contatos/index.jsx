import Linkedin from '../../images/icons/linkedin.png'
import Github from '../../images/icons/github.png'

function Contatos() {
    return (
        <div>
            <h1>
                Contato.
            </h1>
            <div>
                <input placeholder="NOME"></input>
                <input placeholder="MENSAGEM"></input>
                <input placeholder="E-MAIL"></input>
            </div>
            <div className='flex'>
                <a href='https://www.linkedin.com/in/arthur-botelho-8ab547206/' target='blank'><img className="w-12" src={Linkedin}></img></a>
                <a href='https://github.com/ArthurBBotelho' target='blank'><img className="w-12" src={Github}></img></a>
            </div>
        </div>
    )
}

export default Contatos