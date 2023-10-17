import FotoPerfil from './../../assets/FotoPerfil2.png'
import './presentacion.css'

const Presentacion = () => {

    return (
        <div className='flex w-100 justify-center mt-6 lg:mt-16'>

            <section id='presentacion' className='max-w-6xl flex items-center flex-col lg:flex-row space-y-10 lg:space-x-4 xl:space-x-10'>
                <img src={FotoPerfil} alt="FOTOGRAFIA PERSONAL" className=" w-[400px] h-[400px] lg:w-[478px] lg:h-[478px] rounded-[239px] border border-gray-100 border-opacity-8 drop-shadow-md z-0" />
                <div className='presentacionTexto text-center'>
                    <span className='mismalinea'>
                        <p className='titulos' id='hola'>¡Hola! soy</p>
                        <p className='titulos' id='nombre'>César Leal</p>
                    </span>
                    <p className='titulos' id='descripcion'>Desarrollador web,<br /> orgullosamente Politécnico y mexicano de corazón</p>
                    <p className='titulos mt-4' id='dev'>{'<dev> Front end </dev>'}</p>
                </div>
            </section>
        </div>
    );
}


export default Presentacion;