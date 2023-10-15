// import { useState } from 'react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './../../assets/Logo.png'
import './navbar.css'



const navigation = [
    { name: 'Sobre mí', href: '#sobremi' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Trabajos', href: '#trabajos' },
    { name: 'Contactame', href: '#contactame' },
]

// function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Navbar({ children }: any) {
    // const [botonMenu, setBotonMenu] = useState(false);


    return (
        <nav className="bg-white">

            <>
                <nav className='max-w-7xl px-2 lg:px-8 sm:mx-auto h-24 flex justify-between items-center'>
                    <div id="logo">
                        <img src={Logo} alt="LOGO PERSONAL PORTAFOLIO" />
                    </div>
                    <div id="secciones" className='flex space-x-8'>
                        {navigation.map((item) => (
                            <a
                                href={item.href}
                                key={item.name}
                                id="liga"
                                className='titulo'
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <span className="sm:ml-3 titulos" id='botonDescarga'>
                        <button type="button" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Descargar CV
                        </button>
                    </span>

                </nav>
                {children}
            </>

        </nav>
    )
}


