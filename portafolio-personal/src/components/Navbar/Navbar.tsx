import { useState } from 'react'
import { ArrowDownTrayIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './../../assets/Logo.png'
import './navbar.css'



const navigation = [
    { name: 'Sobre mí', href: '#sobremi' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Trabajos', href: '#trabajos' },
    { name: 'Contactame', href: '#contactame' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ children }: any) {
    const [botonMenu, setBotonMenu] = useState(false);


    return (
        <nav className="bg-white">

            <>
                <nav className='max-w-7xl px-4 sm:px-8 sm:mx-auto h-20 flex justify-between items-center'>
                    <div className="flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <div className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Abrir menú</span>
                            {botonMenu ? (
                                <XMarkIcon className="block h-8 w-8" aria-hidden="true" onClick={() => setBotonMenu(false)} />
                            ) : (
                                <Bars3Icon className="block h-8 w-8" aria-hidden="true" onClick={() => setBotonMenu(true)} />
                            )}
                        </div>
                    </div>
                    <div id="logo" className='ml-8 lg:ml-0'>
                        <img src={Logo} alt="LOGO PERSONAL PORTAFOLIO" />
                    </div>
                    <div id="secciones" className='hidden lg:block flex space-x-8'>
                        {navigation.map((item) => (
                            <a
                                href={item.href}
                                key={item.name}
                                id="liga"
                                className='titulos text-emerald-800'
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <span className="titulos" id='botonDescarga'>
                        <button type="button" className="hidden lg:block inline-flex items-center rounded-lg bg-inherit px-5 py-1 text-emerald-800 shadow-md hover:bg-emerald-50 outline outline-2 outline-emerald-800">
                            Descargar CV
                        </button>
                        <button type="button" className="block lg:hidden flex inline-flex items-center rounded-lg bg-inherit px-3 py-1 text-emerald-800 shadow-md hover:bg-emerald-50 outline outline-2 outline-emerald-800">
                            <ArrowDownTrayIcon className="h-6 w-6 mx-1" aria-hidden="true" />
                            CV
                        </button>
                    </span>

                </nav>
                <div className='absolute bg-gray-300 w-11/12 rounded-md ml-5 sm:ml-8 z-10'>
                    <div className={botonMenu ? ("block") : ("hidden")}>
                        <div className="space-y-1 px-4 sm:px-8 pb-3 pt-2 lg:hidden">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        'text-gray-600 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-md font-medium'
                                    )}>{item.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className={botonMenu ? ("block") : ("hidden")}>
                        <div className="space-y-1 px-4 sm:px-8 pb-3 pt-2 lg:hidden">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        'text-gray-600 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-lg font-medium titulos'
                                    )}>{item.name}</a>
                            ))}
                        </div>
                    </div> */}
                {children}
            </>

        </nav>
    )
}


