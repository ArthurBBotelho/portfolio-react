import Linkedin from '../../images/icons/linkedin.png'
import Github from '../../images/icons/github.png'
import Button from '../Button'

function Contatos() {
    return (
        <div id="contato" className='px-72 my-36'>
            <h1 className="text-orange1 font-black text-9xl">
                Contato<span className="text-gray1 font-black text-9xl">.</span>
            </h1>
            <div className='my-4 flex flex-col'>
                <p className="text-gray1 font-medium text-2xl p-4">
                    +55 (31) 995671292<br></br>
                    emilioarthur19@gmail.com
                </p>
                <input className="font-medium bg-gray3 text-xl p-2 my-4" placeholder="Nome"></input>
                <input className="font-medium bg-gray3 text-xl p-2 my-4" placeholder="E-mail"></input>
                <input className="font-medium bg-gray3 text-xl p-2 my-4 h-36" placeholder="Mensagem"></input>
                <Button nome="ENVIAR"/>
            </div>
            <div className='flex'>
                <a href='https://www.linkedin.com/in/arthur-botelho-8ab547206/' target='_blank'><img className="w-12 m-4" src={Linkedin}></img></a>
                <a href='https://github.com/ArthurBBotelho' target='_blank'><img className="w-12 m-4" src={Github}></img></a>
            </div>
        </div>
    )
}

export default Contatos