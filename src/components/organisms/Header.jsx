import { Link } from 'react-router-dom'

import React from 'react'

const Header = () => {
    return (
        <header className='flex flex-col md:flex-row gap-4 justify-between bg-primary border p-4 rounded-xl mx-10 text-primary-foreground items-center sticky top-0'>
            <span>LOGO</span>
            <nav>
                <ul className='md:flex md:flex-row gap-3'>
                    <Link to="/" className='py-2 px-4 hover:text-secondary-foreground rounded-full hover:bg-secondary transition-all cursor-pointer'>Início</Link>
                    <li className='py-2 px-4 hover:text-secondary-foreground hover:bg-secondary rounded-full transition-all cursor-pointer'>Portfólio</li>
                    <li className='py-2 px-4 hover:text-secondary-foreground hover:bg-secondary rounded-full transition-all cursor-pointer'>Serviços</li>
                    <li className='py-2 px-4 hover:text-secondary-foreground hover:bg-secondary rounded-full transition-all cursor-pointer'>Sobre nós</li>
                </ul>
            </nav>
            <span>Fale conosco</span>
        </header>
    )
}

export default Header