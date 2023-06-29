import Menu from './Menu'
import AreaLogo from './AreaLogo'

export default function Cabecalho(){
    return (
        <div className='flex justify-between p-7 max-w-screen max-h-screen text-black w-full stroke-1 bg-gradient-to-r from-yellow-300 to-pink-400'>
            <AreaLogo />
            <Menu home='Ateliê' pecas='Peças' pedido='Meus Pedidos' login='Entrar' utilidades='Utilidades em Feltro'/>
        </div>
    )
}